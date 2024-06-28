from django.db import models
from users.models import Student, Teacher

class AttendanceRecord(models.Model):
    date = models.DateField()
    status = models.CharField(max_length=20)  # Present or Absent
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    # Add additional fields as needed
