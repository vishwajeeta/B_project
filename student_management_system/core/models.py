from django.db import models

# Create your models here.
class Teacher(models.Model):
    name=models.CharField(max_length=50)
    subject=models.CharField( max_length=50)
    def __str__(self):
        return self.subject

class Student(models.Model):
    name=models.CharField(max_length=50)
    subject=models.ForeignKey(Teacher , on_delete=models.CASCADE)

