from django.urls import path
from home import views

urlpatterns=[
    path('',views.home,name="home"),
    path('checksession',views.sessioncheck,name="sessioncheck"),
    path('logout',views.logout,name="logout")
]