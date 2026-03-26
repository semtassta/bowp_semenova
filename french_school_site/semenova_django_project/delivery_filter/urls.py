from django.urls import path
from . import views

app_name = "delivery_filter"

urlpatterns = [
    path("", views.index, name="index"),
    path("filter_companies/", views.filter_companies, name="filter_companies"),
    path('about/', views.about, name='about'),
]