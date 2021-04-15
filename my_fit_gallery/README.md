## My fit gallery
---

### keywords
- frontend
- dom inspector
- html
- basic javascript

### question
ลองหาวิธีดึง image url ที่อยู่ในหน้า index ของ https://unsplash.com/ ขึ้นมาโดย
- หาวิธีในการ inspect ดูว่า url ของรูปถูกเก็บไว้แบบไหน จากหน้าจอเราจะดึง url ของรูปได้ยังไง
- เขียน javascript ง่าย หรือทดสอบใน browser inspect tools ก็ได้ว่าจะ query url ของรูปได้ยังไง
- ใน 1 รูปจะมีรูปที่มีความละเอียดต่างกัน ลองหาวิธีในการเขียนเงื่อนไขในการ เลือกรูปที่เหมาะกับหน้าจอ (+3) 
  - เช่น เมื่อใช้หน้าจอ desktop mode ที่มี width = 1080p ความละเอียดรูปที่เหมาะสมคือ 1080w หรือใกล้เคียงเช่น 1000w, หรือ 1200w ก็ได้ถ้าหาก source นั้นไม่มี width ที่ใกล้เคียง 


### example
list result =>
    https://images.unsplash.com/photo-1618411474625-4d1f95265202?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60 100w, 
    https://images.unsplash.com/photo-1618411474625-4d1f95265202?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=60 200w, 
    https://images.unsplash.com/photo-1618411474625-4d1f95265202?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60 300w, 
    https://images.unsplash.com/photo-1618411474625-4d1f95265202?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60 400w, 
    https://images.unsplash.com/photo-1618411474625-4d1f95265202?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60 500w, 
    https://images.unsplash.com/photo-1618411474625-4d1f95265202?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60

da best quality when my screen is 320px is 
https://images.unsplash.com/photo-1618411474625-4d1f95265202?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60 300w