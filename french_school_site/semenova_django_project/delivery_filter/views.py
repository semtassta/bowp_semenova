# ---- словари с данными ----

ME = {
    "name": "Семенова Таисия Станиславовна",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Happy_smiley_face.png/500px-Happy_smiley_face.png",
    "email": "tastsemenova@edu.hse.ru",
    "phone": "+7 900 111-22-33",
}

PROGRAM = {
    "title": "Фундаментальная и прикладная лингвистика",
    "description": "Программа два направления подготовки: мы готовим специалистов в области компьютерной лингвистики (промпт-инженеры, лингвисты-инженеры, тренеры искусственного интеллекта, технические писатели) и специалистов в области прикладного и теоретического языкознания (психо- и нейролингвисты, преподаватели русского как иностранного, судебные эксперты-лингвисты, редакторы).",
    "director": {
        "name": "Климова Маргарита Андреевна",
        "photo": "https://www.hse.ru/org/persons/cimage/91748436",
        "email": "mfokina@hse.ru",
    },
    "manager": {
        "name": "Чувилина Анастасия Андреевна",
        "photo": "https://www.hse.ru/org/persons/cimage/1014824408",
        "email": "achuvilina@hse.ru",
    }
}

STUDENTS = [
    {
        "name": "Козлов Алексей",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHA3iuro9T34ZwBKvcwFO1S2ITAecdR5IphQ&s",
        "email": "kozlov@example.com",
        "phone": "+7 999 123-45-67",
    },
    {
        "name": "Сидорова Ирина",
        "photo": "https://img.freepik.com/free-photo/expressive-woman-posing-outdoor_344912-3079.jpg?semt=ais_hybrid&w=740&q=80",
        "email": "sidorova@example.com",
        "phone": "+7 999 222-33-44",
    }
]

from django.http import HttpResponse
from django.shortcuts import render

def about(request):
    context = {
        "me": ME,
        "program": PROGRAM,
        "students": STUDENTS,
    }
    return render(request, "delivery_filter/about.html", context)

def index(request):
    return render(request, "delivery_filter/index.html")


def filter_companies(request):
    companies_str = request.GET.get("companies")
    days_str = request.GET.get("days")
    max_days_str = request.GET.get("max")

    if not (companies_str and days_str and max_days_str):
        return HttpResponse("")

    companies = companies_str.split()
    days = list(map(int, days_str.split()))
    max_days = int(max_days_str)

    result = []

    for company, day in zip(companies, days):
        if day <= max_days:
            result.append(company)

    return HttpResponse("\n".join(result))