## Give me a correct pid
---

### keywords
- backend
- api
- restapi
- e2e test / integration test

### question 3
ให้สร้าง 1 API สำหรับ validate pid value ที่ถูกส่งมาใน body หรือ query string หรือ param ก็ได้
- รองรับ content-types
  - `application/json`
  - `multipart/form-data`
- มี feature
  - เมื่อมีการระบุ `f__k_you_give_me_number` ใน query string มาใน response จะมีการแสดงผลลัพธ์ที่ถูกต้องกลับไปด้วย
- response
  - เป็น content-type application/json เท่านั้น
  - รองรับ
    - http status `422`, เมื่อ pid ไม่ครบ 13 หลักหรือมีการกรอกตัวอักษรอื่นที่ไม่ใช่ตัวเลขมา
    - http status `200` จะมี data model ในตัวอย่างเท่านั้น
- แน่นอนว่าเนื่องจากเป็น backend เป็นจุดศูนย์ร่วม business logic ถ้าอยากให้คะแนนเพิ่ม เราแนะนำให้เขียนน test มาด้วย โดย
  - unit test ที่ test ระดับ function คล้ายๆกับที่ทำใน frontend (+2)
  - integration test คือมีการ run e2e test คือ spawn api แล้วมีการปั้น request ยิงไป test แบบจบครบกระบวนความ (+3)
    - เสริม e2e test เราจะ test แบบ mock http request ไป แล้ว expect ผลลัพธ์จาก response กลับมา ซึ่งลองดู test case จากด้านล่าง
    - test case
      - happy path, when send correct pid 13digit
      - unhappy path, bad data when pid is not 13digit length
      - unhappy path, bad data when pid is empty string or null
      - unhappy path, status 200 but invalid pid
      - unhappy path, status 200 both invlid pid and send req.query.f__k_you_give_me_numbers

### example
```typescript
type IResponse {
    result: boolean; // validate result
    correct_pid_is: string | undefined; // depends on req.query.f__k_you_give_me_number option
}

// example
{
    result: false,
    correct_pid_is: '000000000000x'
}
```