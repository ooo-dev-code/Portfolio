from django.db import models
from django.contrib.auth.models import User

# Create your models here.
# class Register(models.Model):
#     username = models.CharField(max_length=30)
#     password = models.CharField(max_length=30)
#     is_you = models.BooleanField(default=False)
    
class Note(models.Model):
    title = models.CharField(max_length=30)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")