---
title: Image Augmentation with Python
description: Quickly apply common augmentations using Python
date: 2021-01-01
draft: false
slug: /pensieve/image-aug
tags:
  - Python
---

<p>First, let us import the related libraries and make a sample plot using the images from the local folder</p>

```python
import matplotlib.pyplot as plt
from imgaug import augmenters as iaa
import cv2

image = 'your-image-list'
fig = plt.figure(figsize=(17, 17))
columns = 2
rows = 3
for n, images in enumerate(image):
    fig.add_subplot(columns, rows, n+1)
    plt.imshow(cv2.imread(images)[:, :, ::-1])
plt.show()
```

<p>Next, let us import the augmentation library, imgaug and add in brightness augmentation</p>

```python
aug = iaa.imgcorruptlike.Brightness(severity=3)
fig = plt.figure(figsize=(17, 17))
columns = 2
rows = 3
for n, images in enumerate(image):
    fig.add_subplot(columns, rows, n+1)
    blur_image = aug(image=cv2.imread(images))
    plt.imshow(blur_image[:, :, ::-1])
plt.show()
```

<p>We can go on a use the function to declare different augmentations such as contrast, motion blur, saturation and so on. As a bonus, let us try to add in combined augmentations</p>

```python
aug = iaa.Sequential([
    iaa.Crop(px=(0, 16)),
    iaa.imgcorruptlike.GaussianNoise(severity=5),
    iaa.imgcorruptlike.MotionBlur(severity=5)
])

fig = plt.figure(figsize=(20, 20))
columns = 2
rows = 3
for n, images in enumerate(image[0:3]):
    fig.add_subplot(columns, rows, n+1)
    blur_image = aug(image=cv2.resize(cv2.imread(images), (750, 1000), interpolation = cv2.INTER_AREA))
    plt.imshow(blur_image[:, :, ::-1])
plt.show()
```


And that is how you perform augmentation using the imgAug library.