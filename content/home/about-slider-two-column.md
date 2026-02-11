---
# An instance of the About widget.
# Documentation: https://wowchemy.com/docs/page-builder/
widget: github.cdalas2.about-slider-two-column

# Activate this widget? true/false
active: true

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 2

author: 'cdalas'

design:
  # Slide height is automatic unless you force a specific height (e.g. '400px')
  slide_height: '850px'
  is_fullscreen: false
  # Automatically transition through slides?
  loop: true
  # Duration of transition between slides (in ms)
  interval: 2000

content:
  slides:
    - title: 'Protein-induced bilayer deformations'
      content: 'Recent submission to PRE'
      align: bottom
      background:
        position: top
        color: '#666'
        brightness: 0.7
        media: ProteinBilayerDeformationsPresentationTitlePage.png
        fit: contain
    - title: 'Emerin protein nanodomains'
      content: 'Share your knowledge with the group and explore exciting new topics together!'
      align: center
      background:
        position: top
        color: '#666'
        brightness: 0.7
        media: EmerinProteinNanoDomainsPresentationTitlePage.png
        fit: contain
    - title: 'Bacteria in porous media simulations'
      content: 'Kinetic Monte Carlo modeling of bacterial hopping and trapping'
      align: center
      background:
        position: top
        color: '#666'
        brightness: 0.7
        media: BacteriaPorousMediaPresentationTitlePage.png
        fit: contain
    - title: World-Class Semiconductor Lab
      content: 'Just opened last month!'
      align: right
      background:
        position: top
        color: '#666'
        brightness: 0.7
        media: maxresdefault.jpg
        fit: contain
      link:
        icon: graduation-cap
        icon_pack: fas
        text: Join Us
        url: /contact/
---
