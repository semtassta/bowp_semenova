from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main_site.urls')),
    path('filter/', include('delivery_filter.urls')),
]