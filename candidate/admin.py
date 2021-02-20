from django.contrib import admin
from candidate.models import Candidate, Candidate_temp, Loggedin
# Register your models here.
admin.site.register(Candidate)
admin.site.register(Candidate_temp)
admin.site.register(Loggedin)
