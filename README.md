Fix lỗi macos không cấp quyền cho express trong static file

1. Kiểm tra quyền truy cập thư mục public:

Vào Terminal trên macOS.

Sử dụng lệnh ls -l để liệt kê các tệp và thư mục trong thư mục hiện tại.

Tìm và xem quyền truy cập cho thư mục public. Quyền truy cập thường sẽ hiển thị trong đoạn đầu tiên của kết quả lệnh ls -l

2. Cấp quyền truy cập cho thư mục và tệp:

Để cấp quyền đọc và thực thi cho thư mục public, bạn có thể sử dụng lệnh sau:
chmod +rx /path/to/your/project/public

Để cấp quyền đọc cho tệp hình ảnh hoidanit.png, bạn có thể sử dụng lệnh sau:
Để cấp quyền đọc cho tệp hình ảnh hoidanit.png, bạn có thể sử dụng lệnh sau:
Thay /path/to/your/project bằng đường dẫn thực tế đến dự án của bạn.

3. Kiểm tra lại quyền truy cập: Sau khi bạn đã cấp quyền truy cập, bạn có thể sử dụng lại lệnh ls -l để kiểm tra lại quyền truy cập cho thư mục và tệp. Quyền truy cập của chúng nên đã được thay đổi.

4. Khởi động lại máy chủ Express.js: Sau khi bạn đã cấp quyền truy cập, hãy khởi động lại máy chủ Express.js để đảm bảo rằng các thay đổi này được áp dụng.
