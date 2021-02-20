import random
import time
from candidate.models import Loggedin, Candidate
from rest_framework.decorators import api_view
def genText(length):
    max_num=10**(length)-1
    num=random.randint(0,max_num)
    msg=''
    if length<7:
        while(num>0):
            curr=num%100
            msg+=chr(int(65+curr%26))
            num//=10
    else:
        while(num>0):
            curr=num%1000
            msg+=chr(int(33+curr%93))
            num//=10
        msg+=str(int(time.time()))
    return msg

def checkSession(request,user,**type):
    try:
        if(request.method=="GET"):
            authtoken=request.query_params['authtoken']
        else:
            authtoken=request.data['authtoken']
        if(user=="candidate"):
            candidate=Loggedin.objects.filter(authtoken=authtoken)[0]
            candidate=Candidate.objects.filter(phone=candidate.phone.phone).first()
            return candidate
    except:
        return None