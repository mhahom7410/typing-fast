## Give me a correct pid
---

### keywords
- frontend
- form
- form validation
- unit test
- ui/ux

### back on track question 1
ให้สร้าง form ที่มี input รองรับการกรอกตัวเลขบัตรประชาชนจำนวน 13 หลัก โดย
- input กรอกได้เฉพาะตัวเลขเท่านั้น
- input กรอกได้สูงสุด 13 หลักเท่านั้น
- ปุ่ม submit จะมีสถานะ enable (หมายถึงสามารถกด submit form)ก็ต่อเมื่อเลขบัตรประชำตัวประชาชนถูกต้องเท่านั้น
- ถ้ามีการคิด ui/ux มาเพิ่มเติม เรามีคะแนนเพิ่มให้ (+2)
- ถ้าสามารถเขียน test validate pid function ได้ เรามีคะแนนเพิ่มให้ (+3)
  - test case มี 3 case
    - happy path (all 13 digits and last digit must be correct number)
    - unhappy path (when input have 13 digits but last digit it not correct)
    - unhappy path (when input length below 13 ditits)

### question 2
**require** api from `ill_give_your_a_correct_pid`
ให้สร้าง page ขึ้นมาอีก 1 หน้าที่มีหน้าที่เดียวกันกับ question 1 แป๊ะ แต่ให้เพิ่ม
- checkbox ซึ่งเป็นตัวที่เอาไว้บอกว่าจะใช้ feature f__k_you_give_me_number ไหม
- แสดง output จาก response ด้วย ซึ่งแล้วแต่จะจัดเรียงตาม ui/ux ได้เลย


### example
