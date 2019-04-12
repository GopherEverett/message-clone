from django.db import models

# Create Post Models here.
class Post(models.Model):
    created_at = models.DateField(default=datetime.now(), blank=True)
    title = models.CharField(max_length=250)
    picture = models.CharField(max_length=400)
    content = models.CharField(max_length=1000)
    site_url = models.CharField(max_length=400)
    vote_total = models.IntegerField(default=0) 

    def __str__(self):
        return self.title

class Comment(models.Model):
    created_at = models.DateField(default=datetime.now(), blank=True)
    content = models.CharField(max_length=400)
    vote_total = models.IntegerField(default=0) 
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')

    def __str__(self):
        return self.content