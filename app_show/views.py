# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from pymongo import *
import requests
import json



def buscas(request):
	MONGODB_URI = "mongodb://new:carloandre23@ds135382.mlab.com:35382/miningprice"
	client = MongoClient(MONGODB_URI, connectTimeoutMS = 300000)
	db = client.get_database("miningprice")
	user_records = db.user_records

	posts = db.posts             #Aguarda 5 segundos 
	post_id = posts.find({})
	post_id1 = posts.find({})
	# post_id = {'a':10,'b':20,'c':15}
	return render (request, 'app_show/index.html', {'obj':post_id, 'locale':post_id1, 'ids':post_id.count()})

def cut(value, arg):
    """Removes all values of arg from the given string"""
    return value.replace(arg, '.')
