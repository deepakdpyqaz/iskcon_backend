from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from candidate.models import Candidate, Candidate_temp, Loggedin
from home.extrafunctions import genText,checkSession
from manager.models import Level, Lecture
from django.db.models import Q
from candidate.serializer import CandidateSerializer
from manager.serializer import LectureSerializer
# Create your views here.
@api_view(['POST'])
def login(request):
    try:
        phone=request.data['phone']
        password=request.data['password']
    except:
        return Response({"Error":True})
    candidate=Candidate.objects.filter(phone=phone)
    if(len(candidate)==0):
        return Response({"Error":"Incorrect username"})
    else:
        candidate=candidate[0]
        if(candidate.password!=password):
            return Response({"Error":"Password Incorrect"})
        if(candidate.status!="active"):
            return Response({"Error":"Account not active"})
        loggedin=Loggedin.objects.filter(phone=candidate)
        for person in loggedin:
            person.delete()
        authtoken=genText(10)
        person_new=Loggedin(phone=candidate,authtoken=authtoken)
        person_new.save()
        return Response({"Error":False,"authtoken":authtoken})

@api_view(['POST'])
def verify(request):
    try:
        phone=request.data['phone']
        name=request.data['name']
        gender=request.data['gender']
        email=request.data['email']
        dob=request.data['dob']
        occupation=request.data['occupation']
        married=request.data['married']
        connected=request.data['connected']
        country=request.data['country']
        city=request.data['city']
        source=request.data['source']
        info=request.data['info']
        authtoken=genText(15)
        otp=genText(6)
    except:
        return Response({"Error":True})

    try:
        cand_temp=Candidate.objects.filter(Q(phone=phone)|Q(email=email))
        if(len(cand_temp)!=0):
            return Response({"Error": "Mail or phone is already registered"})
        candidate=Candidate_temp(phone=phone,name=name,gender=gender,email=email,dob=dob,occupation=occupation,married=married,connected=connected,country=country,city=city,source=source,info=info,otp=otp,authtoken=authtoken)
        candidate.save()
    except:
        return Response({"Error":"Mail or phone is already registered"})

    # logic of sending the otp

    return Response({"Error":False,"authtoken":authtoken})


@api_view(['POST'])
def register(request):
    try:
        phone = request.data['phone']
        name = request.data['name']
        gender = request.data['gender']
        email = request.data['email']
        dob = request.data['dob']
        occupation = request.data['occupation']
        married = request.data['married']
        connected = request.data['connected']
        country = request.data['country']
        city = request.data['city']
        source = request.data['source']
        info = request.data['info']
        otp=request.data['otp']
        authtoken=request.data['authtoken']
        password=genText(6)
        status='pending'
        lev=Level.objects.filter(level=1).first()
    except:
        return Response({"Error":True})
    try:
        candidate=Candidate_temp.objects.filter(phone=phone,email=email,name=name,gender=gender,dob=dob,occupation=occupation,city=city,otp=otp,country=country,source=source,info=info,authtoken=authtoken).last()
        candid=Candidate(phone=phone,email=email,name=name,gender=gender,dob=dob,occupation=occupation,married=married,connected=connected,city=city,country=country,source=source,info=info,password=password,status=status,level=lev)
        candid.save()
        candidate.delete()
        return Response({"Error":False})
    except:
        candidate = Candidate_temp.objects.filter(
            Q(phone=phone) | Q(email=email))
        for cand in candidate:
            cand.delete()
        return Response({"Error":True})


@api_view(['GET','POST'])
def profile(request):
    if(request.method=="GET"):
        candidate=checkSession(request,"candidate")
        if(candidate==None):
            return Response({"Error":"Not in session"})
        candidateserializer=CandidateSerializer(candidate)
        data={"Error":False}
        data.update(candidateserializer.data)
        return Response(data)
    else:
        candidate = checkSession(request, "candidate")
        if(candidate==None):
            return Response({"Error":"Not in session"})
        try:
            candidate.name = request.data['name']
            candidate.gender = request.data['gender']
            candidate.email = request.data['email']
            candidate.dob = request.data['dob']
            candidate.occupation = request.data['occupation']
            candidate.married = request.data['married']
            candidate.country = request.data['country']
            candidate.city = request.data['city']
            candidate.password=request.data['password']
            candidate.save()
            return Response({"Error":False})
        except:
            return Response({"Error":True})

@api_view(["GET"])
def lectures(request):
    candidate=checkSession(request,"candidate")
    if(candidate==None):
        return Response({"Error":"Not in session"})
    candidate_level=candidate.level.level
    seq=candidate.sequence
    data=[]
    cur_level=Level.objects.filter(level=candidate_level).first()
    cur_lect=Lecture.objects.filter(level=cur_level,sequence__lte=seq)
    cur_lect_serializer=LectureSerializer(cur_lect,many=True)
    cur_data={'title':cur_level.title,'videos':cur_lect_serializer.data}
    data.append(cur_data)
    for lev in range(candidate_level-1,0,-1):
        try:
            level=Level.objects.filter(level=lev).first()
            level_data={}
            level_data['title']=level.title
            lects=Lecture.objects.filter(level=level)
            lectsserializer=LectureSerializer(lects,many=True)
            level_data['videos']=lectsserializer.data
            data.append(level_data)
        except:
            pass
    return Response(data)
    



    


            
        
