from django.shortcuts import render

def index(request):
    return render(request, "main_site/index.html")

def algorithmic(request):
    return render(request, "main_site/algorithmic.html")

def tutors(request):
    return render(request, "main_site/tutors.html")

def control_work(request):
    return render(request, "main_site/control_work.html")

def exercises(request):
    return render(request, "main_site/exercises.html")