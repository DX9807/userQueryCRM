from django.contrib import admin
from .models import QueryModel

class QueryModelAdmin(admin.ModelAdmin):
    list_display = ['first_name','last_name','status']


admin.site.register(QueryModel,QueryModelAdmin)
