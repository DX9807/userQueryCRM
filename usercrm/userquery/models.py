from django.db import models

class QueryModel(models.Model):
    
    STATUS_CHOICES = (
        ('1','Yet to Contact'),
        ('2','In progress'),
        ('3','No response from customer'),
        ('4','Success'),
        ('5','Failure'),
        ('6','Not interested right now but will be in future')
    )


    first_name  = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    status = models.CharField(max_length=20 ,choices=STATUS_CHOICES)
    query = models.CharField(max_length=200,blank=False)
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return("{} {}".format(self.first_name,self.last_name)) 

    def json(self):
        return (
            {
                "first_name":self.first_name,
                "last_name":self.last_name,
                "status":self.status,
                "query":self.query,
                "created_on":str(self.created_on)
            }
        )    