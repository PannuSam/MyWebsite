---
layout: layout.ejs
title: My Blog
---

	
    {% for post in collections.post %}
<ul>
    <li>
        <a href="{{ post.url }} ">{{ post.data.title }} </a> {{ post.date | date: "%Y-%m-%d"  }}
    </li>
</ul>
{% endfor %}