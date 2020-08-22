from django import  forms
from .models import  QueryModel

class QueryForm(forms.ModelForm):
    class Meta:
        model = QueryModel
        fields = ('first_name','last_name','query')