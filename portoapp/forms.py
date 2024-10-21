

from django import forms



class myMails(forms.Form):
    name =  forms.CharField(max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Full Name',}))
    email = forms.EmailField(widget=forms.EmailInput(attrs={'placeholder': 'Your Email',}))

    message = forms.CharField(widget=forms.Textarea(attrs={'placeholder': 'Your Message', 'rows': 4}))
