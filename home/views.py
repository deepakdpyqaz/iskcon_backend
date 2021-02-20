from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from home.extrafunctions import checkSession
from candidate.models import Loggedin
# Create your views here.

def home(request):
    return render(request,'index.html')

@api_view(['GET'])
def sessioncheck(request):
    if(checkSession(request,"candidate")):
        return Response({"Error":False,"user":"candidate"})
    elif(checkSession(request,"manager",type='A')):
        return Response({"Error":False,"user":"manager","type":"A"})
    elif(checkSession(request,"manager",type='B')):
        return Response({"Error":False,"user":"manager","type":"B"})
    elif(checkSession(request,"manager",type='C')):
        return Response({"Error":False,"user":"manager","type":"C"})
    else:
        return Response({"Error":True})

@api_view(['GET'])
def logout(request):
    try:
        authtoken=request.query_params['authtoken']
        candidates=Loggedin.objects.filter(authtoken=authtoken)
        for candidate in candidates:
            candidate.delete()

        return Response({"Error":False})
    except:
        return Response({"Error":True})
    
