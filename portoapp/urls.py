from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('sending/', views.sending_email, name='smail'),
]
