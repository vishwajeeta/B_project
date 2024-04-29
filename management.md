# Student management system 

monthaly_message= Attendance + monthly % ,
message == student.absent

Admin(sub_teacher)>parents/students (view)
//No updates (attendence)
parents/students (onlyOwnAttendence.view) 
Teacher (allAttendence.view)

Profile=Student,teacher
If( studentProfileCreation in Teacher(student.profileData) ){ 
studentProfile.create()
Teacher.update("progress")
if(sub_Teacher.permission=="yes")
Teacher.update("success!")
}else{
Teacher.update("pending")
}

Sub_teacher=students.submit_doc(img,pdf,mp4 )

Sub_teacher=onlyTheirSubject.attendence


