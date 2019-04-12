from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('comments', views.CommentView)
router.register('posts', views.PostView)


urlpatterns = [
    path('', include(router.urls))
]