from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from .forms import QueryForm
from django.http import JsonResponse


@csrf_exempt
def index(request):
    if request.method == "POST":
        print(request.POST)
        queryform = QueryForm(data=request.POST)
        if queryform.is_valid():
            queryform.save()
            return JsonResponse({},status=201)
        else:
            print(queryform.errors)       
    queryform = QueryForm()    
    return render(request,'form.html',{'form':queryform})
