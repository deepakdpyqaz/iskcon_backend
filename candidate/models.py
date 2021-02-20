from django.db import models
from manager.models import Level
# Create your models here.
class Candidate_temp(models.Model):
    phone=models.CharField(max_length=15,primary_key=True)
    name=models.CharField(max_length=50)
    gender=models.CharField(max_length=1)
    email=models.CharField(max_length=50,unique=True)
    dob=models.DateField()
    occupation=models.CharField(max_length=15)
    married=models.CharField(max_length=1)
    connected=models.CharField(max_length=1)
    country=models.CharField(max_length=20)
    city=models.CharField(max_length=20)
    source=models.CharField(max_length=20)
    info=models.TextField(max_length=1000)
    otp=models.CharField(max_length=6)
    authtoken=models.CharField(max_length=30,default="")
    def __str__(self):
        return self.name 


class Candidate(models.Model):
    phone = models.CharField(max_length=15, primary_key=True)
    name = models.CharField(max_length=50)
    gender = models.CharField(max_length=1)
    email = models.CharField(max_length=50, unique=True)
    dob = models.DateField()
    occupation = models.CharField(max_length=15)
    married = models.CharField(max_length=1)
    connected = models.CharField(max_length=1)
    country = models.CharField(max_length=20)
    city = models.CharField(max_length=20)
    source = models.CharField(max_length=20)
    info = models.TextField(max_length=1000)
    password = models.CharField(max_length=15)
    status = models.CharField(max_length=10)
    level=models.ForeignKey(Level,on_delete=models.SET_NULL,null=True)
    sequence=models.IntegerField(default=0)
    def __str__(self):
        return self.name

class Loggedin(models.Model):
    phone=models.ForeignKey(Candidate,on_delete=models.CASCADE)
    authtoken=models.CharField(max_length=25)

    def __str__(self):
        return self.phone.name
