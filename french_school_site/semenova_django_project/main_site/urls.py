from django.urls import include, path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("algorithmic/", views.algorithmic, name="algorithmic"),
    path("tutors/", views.tutors, name="tutors"),
    path("control_work/", views.control_work, name="control_work"),
    path("exercises/", views.exercises, name="exercises"),
]