from django.urls import path
from candidate import views

urlpatterns=[
    path('login',views.login,name='candidate_login'),
    path('verify',views.verify,name='candidate_verify'),
    path('register',views.register,name='candidate_register'),
    path('profile',views.profile,name='candidate_profile'),
    path('lectures',views.lectures,name='candidate_lectures')
]