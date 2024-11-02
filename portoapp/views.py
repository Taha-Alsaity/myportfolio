from django.core.mail import send_mail
from django.shortcuts import render, redirect
from django.conf import settings
from django.contrib import messages
from .models import viewers



# Create your views here.


def index(request):
    viewer = viewers.objects.get(id="1")
    viewer.number =+ 1
    viewer.save()
    return render(request,"porttem/index.html",{"viewers":viewer})
  

def sending_email(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")

        if name and email and message:
            send_mail(
                subject=f'New message from {name}',
                message=f"{message} from {email}",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.DEFAULT_FROM_EMAIL],
            )
            viewer = viewers.objects.get(id="1")
            viewer.contacts =+ 1
            viewer.save()
            messages.success(request,'Email was sent successfully')
            return redirect('index')
            

    return render(request, 'porttem/index.html')