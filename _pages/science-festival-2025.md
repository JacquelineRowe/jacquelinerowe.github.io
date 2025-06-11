---
layout: page
title: 'AI for All: Designing Responsibly (Public Engagement at Edinburgh Science Festival 2025)'
permalink: /science-festival-2025/
---

## Photo Gallery

{% assign images = site.static_files 
  | where_exp: "file", "file.path contains 'assets/img/science-fest-2/' and file.extname == '.jpg'" 
  | sort: "path" 
  | uniq 
%}
<div class="gallery">
  {% for image in images %}
    <a href="{{ site.baseurl }}{{ image.path }}">
      <img src="{{ site.baseurl }}{{ image.path }}" alt="AI for All photo" style="max-width: 200px; margin: 5px;">
    </a>
  {% endfor %}
</div>

<br>

## Digital Resources 

{% assign images = site.static_files 
  | where_exp: "file", "file.path contains 'assets/img/science-fest-1/' and file.extname == '.jpg'" 
  | sort: "path" 
  | uniq 
%}
<div class="gallery">
  {% for image in images %}
    <a href="{{ site.baseurl }}{{ image.path }}">
      <img src="{{ site.baseurl }}{{ image.path }}" alt="AI for All photo" style="max-width: 200px; margin: 5px;">
    </a>
  {% endfor %}
</div>
