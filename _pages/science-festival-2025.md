---
layout: page
title: 'AI for All: Science Festival 2025 Photo Gallery'
permalink: /science-festival-2025/
---

# AI for All: Designing Responsibly 

{% assign images = site.static_files 
  | where_exp: "file", "file.path contains 'assets/img/science-fest/' and file.extname == '.jpg'" 
  | sort: "path" 
  | uniq 
%}

# Interactive Exhibits – Photo Gallery
<div class="gallery">
  {% for image in images %}
    <a href="{{ site.baseurl }}{{ image.path }}">
      <img src="{{ site.baseurl }}{{ image.path }}" alt="AI for All photo" style="max-width: 200px; margin: 5px;">
    </a>
  {% endfor %}
</div>
