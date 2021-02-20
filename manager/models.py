from django.db import models

# Create your models here.
class Level(models.Model):
    level=models.IntegerField()
    title=models.CharField(max_length=10)

    def __str__(self):
        return self.title

class Lecture(models.Model):
    level=models.ForeignKey(Level,on_delete=models.SET_NULL,null=True)
    title=models.CharField(max_length=20)
    video=models.FileField(upload_to='videos')
    sequence=models.IntegerField(default=0)

    def __str__(self):
        return self.title