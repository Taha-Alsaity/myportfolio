from django.db import models

# Create your models here.



class viewers(models.Model):
    number = models.IntegerField()
    unq_num = models.IntegerField(default=0)
    contacts = models.IntegerField()