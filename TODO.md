## TODO 
Tạo trang quản lý bài đăng có các chức năng sau:
- List các bài đăng đang có theo bảng
- Có nút thêm bài đăng, input form điền title và input form điền body
- Có nút xoá bài đăng
- Có nút sửa bài đăng, khi ấn vào nút sửa sẽ redirect tới trang /posts/id, có thể sửa body và title
Design Reference [Design](handson.drawio)
## i18n
Dùng cho trang web tích hợp đa ngôn ngữ, có thể chuyển các title, label từ ngôn ngữ này sang ngôn ngữ khác mà không cần phải viết lại code
Cách dùng:
    - Định nghĩa các label, title ở trong locales/ja.js (ở đây đang để default language là tiếng Nhật). VD: lang: "日本"
    - Khi gọi trong pages xxx.vue sẽ gọi như sau: $t('lang')

