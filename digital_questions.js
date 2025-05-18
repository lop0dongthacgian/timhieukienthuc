const questions = [
    
    {
        question: "Định danh điện tử là gì?",
        answers: [
            { text: "Là một loại chứng minh nhân dân vật lý", correct: false },
            { text: "Là danh tính của công dân trên môi trường số", correct: true },
            { text: "Là chữ ký tay được scan", correct: false },
            { text: "Là mật khẩu tài khoản ngân hàng", correct: false }
        ]
    },
    {
        question: "Ứng dụng nào của Việt Nam hỗ trợ định danh điện tử?",
        answers: [
            { text: "Zalo", correct: false },
            { text: "Facebook", correct: false },
            { text: "VNeID", correct: true },
            { text: "TikTok", correct: false }
        ]
    },
    {
        question: "Định danh điện tử mức 1 có những thông tin gì?",
        answers: [
            { text: "Chỉ số CCCD và họ tên", correct: false },
            { text: "Số CCCD, họ tên, ngày sinh, giới tính", correct: true },
            { text: "Thông tin sinh trắc học", correct: false },
            { text: "Tất cả thông tin trên giấy tờ tùy thân", correct: false }
        ]
    },
    {
        question: "Định danh điện tử mức 2 bao gồm những thông tin gì?",
        answers: [
            { text: "Chỉ số CCCD và họ tên", correct: false },
            { text: "Thông tin cơ bản và ảnh chân dung, vân tay", correct: true },
            { text: "Chỉ thông tin về sức khỏe", correct: false },
            { text: "Thông tin tài khoản ngân hàng", correct: false }
        ]
    },
    {
        question: "Lợi ích của việc sử dụng định danh điện tử VNeID là gì?",
        answers: [
            { text: "Thay thế giấy tờ tùy thân khi giao dịch hành chính", correct: false },
            { text: "Thanh toán các dịch vụ công", correct: false },
            { text: "Kê khai thuế trực tuyến", correct: false },
            { text: "Tất cả các lợi ích trên", correct: true }
        ]
    },
    {
        question: "Hành chính công trực tuyến là gì?",
        answers: [
            { text: "Làm thủ tục hành chính tại trụ sở cơ quan nhà nước", correct: false },
            { text: "Làm thủ tục hành chính qua điện thoại", correct: false },
            { text: "Làm thủ tục hành chính qua môi trường mạng Internet", correct: true },
            { text: "Làm thủ tục hành chính qua bưu điện", correct: false }
        ]
    },
    {
        question: "Cổng Dịch vụ công Quốc gia có địa chỉ truy cập là gì?",
        answers: [
            { text: "dichvucong.gov.vn", correct: true },
            { text: "chinhphu.vn", correct: false },
            { text: "vneid.gov.vn", correct: false },
            { text: "moj.gov.vn", correct: false }
        ]
    },
    {
        question: "Khi sử dụng dịch vụ công trực tuyến, người dân có thể thực hiện điều gì?",
        answers: [
            { text: "Nộp hồ sơ trực tuyến", correct: false },
            { text: "Theo dõi tình trạng giải quyết hồ sơ", correct: false },
            { text: "Nhận kết quả trực tuyến hoặc qua bưu điện", correct: false },
            { text: "Tất cả các việc trên", correct: true }
        ]
    },
    {
        question: "Để nộp hồ sơ trực tuyến trên Cổng Dịch vụ công Quốc gia, người dân cần có tài khoản gì?",
        answers: [
            { text: "Tài khoản Facebook", correct: false },
            { text: "Tài khoản Google", correct: false },
            { text: "Tài khoản Cổng Dịch vụ công Quốc gia hoặc VNeID", correct: true },
            { text: "Tài khoản ngân hàng", correct: false }
        ]
    },
    {
        question: "Thành phần hồ sơ khi nộp trực tuyến có cần công chứng không?",
        answers: [
            { text: "Luôn luôn cần công chứng", correct: false },
            { text: "Tùy thuộc vào từng thủ tục và quy định", correct: true },
            { text: "Không bao giờ cần công chứng", correct: false },
            { text: "Chỉ cần chụp ảnh mờ", correct: false }
        ]
    },
    {
        question: "Thanh toán trực tuyến phí, lệ phí giải quyết thủ tục hành chính được thực hiện qua đâu?",
        answers: [
            { text: "Chỉ bằng tiền mặt", correct: false },
            { text: "Qua các cổng thanh toán trực tuyến được tích hợp", correct: true },
            { text: "Chỉ qua chuyển khoản ngân hàng", correct: false },
            { text: "Qua bưu điện", correct: false }
        ]
    },
    {
        question: "Khi gặp khó khăn khi thực hiện thủ tục hành chính trực tuyến, người dân có thể tìm hỗ trợ ở đâu?",
        answers: [
            { text: "Hỏi người thân", correct: false },
            { text: "Liên hệ tổng đài hỗ trợ hoặc bộ phận một cửa điện tử của cơ quan", correct: true },
            { text: "Tự tìm hiểu trên mạng", correct: false },
            { text: "Bỏ qua không làm nữa", correct: false }
        ]
    },
    {
        question: "Việc sử dụng định danh điện tử và hành chính công trực tuyến góp phần vào mục tiêu nào của Chính phủ Việt Nam?",
        answers: [
            { text: "Chỉ để giảm giấy tờ", correct: false },
            { text: "Xây dựng Chính phủ số, nền kinh tế số, xã hội số", correct: true },
            { text: "Tăng cường sử dụng tiền mặt", correct: false },
            { text: "Giảm tương tác giữa người dân và cơ quan nhà nước", correct: false }
        ]
    },
    {
        question: "Độ bảo mật của định danh điện tử VNeID được đảm bảo như thế nào?",
        answers: [
            { text: "Không được bảo mật", correct: false },
            { text: "Được bảo vệ bởi hệ thống công nghệ thông tin hiện đại", correct: true },
            { text: "Chỉ cần mật khẩu đơn giản", correct: false },
            { text: "Chia sẻ thông tin cho người lạ", correct: false }
        ]
    },
    {
        question: "Khi mất điện thoại có cài VNeID, cần làm gì ngay lập tức?",
        answers: [
            { text: "Không làm gì cả", correct: false },
            { text: "Liên hệ cơ quan công an hoặc khóa tài khoản VNeID", correct: true },
            { text: "Mua điện thoại mới", correct: false },
            { text: "Đăng nhập trên thiết bị khác", correct: false }
        ]
    },
    {
        question: "Cá nhân có bắt buộc phải đăng ký tài khoản định danh điện tử không?",
        answers: [
            { text: "Bắt buộc với tất cả mọi người", correct: false },
            { text: "Không bắt buộc, tùy nhu cầu sử dụng", correct: true },
            { text: "Chỉ bắt buộc với cán bộ công chức", correct: false },
            { text: "Chỉ bắt buộc với người kinh doanh", correct: false }
        ]
    },
    {
        question: "Đăng ký tài khoản định danh điện tử mức 1 được thực hiện ở đâu?",
        answers: [
            { text: "Tại nhà", correct: false },
            { text: "Qua ứng dụng VNeID trên điện thoại", correct: true },
            { text: "Tại trụ sở công an xã, phường, thị trấn", correct: false },
            { text: "Tại ngân hàng", correct: false }
        ]
    },
    {
        question: "Đăng ký tài khoản định danh điện tử mức 2 được thực hiện ở đâu?",
        answers: [
            { text: "Tại nhà", correct: false },
            { text: "Qua ứng dụng VNeID trên điện thoại", correct: false },
            { text: "Tại trụ sở công an xã, phường, thị trấn", correct: true },
            { text: "Tại bưu điện", correct: false }
        ]
    },
    {
        question: "Khi sử dụng VNeID, các thông tin cá nhân có được chia sẻ công khai không?",
        answers: [
            { text: "Được chia sẻ công khai cho mọi người", correct: false },
            { text: "Không được chia sẻ công khai, chỉ sử dụng để xác minh danh tính khi cần thiết", correct: true },
            { text: "Chia sẻ tùy ý người dùng", correct: false },
            { text: "Chỉ chia sẻ trên mạng xã hội", correct: false }
        ]
    },
    {
        question: "Việc tích hợp các giấy tờ vào VNeID mang lại lợi ích gì?",
        answers: [
            { text: "Giảm số lượng giấy tờ cần mang theo", correct: false },
            { text: "Thuận tiện khi thực hiện các giao dịch", correct: false },
            { text: "Tiết kiệm thời gian và chi phí", correct: false },
            { text: "Tất cả các lợi ích trên", correct: true }
        ]
    },
    {
        question: "Cổng Dịch vụ công Quốc gia cung cấp dịch vụ công cho đối tượng nào?",
        answers: [
            { text: "Chỉ cho cán bộ nhà nước", correct: false },
            { text: "Chỉ cho doanh nghiệp", correct: false },
            { text: "Cho cả cá nhân và doanh nghiệp", correct: true },
            { text: "Chỉ cho người nước ngoài", correct: false }
        ]
    },
    {
        question: "Thủ tục hành chính trực tuyến mức độ 3 là gì?",
        answers: [
            { text: "Chỉ cho phép nộp hồ sơ trực tuyến", correct: false },
            { text: "Cho phép nộp hồ sơ trực tuyến và thanh toán trực tuyến", correct: true },
            { text: "Cho phép nộp hồ sơ trực tuyến, thanh toán trực tuyến và nhận kết quả trực tuyến", correct: false },
            { text: "Chỉ cung cấp thông tin về thủ tục", correct: false }
        ]
    },
    {
        question: "Thủ tục hành chính trực tuyến mức độ 4 là gì?",
        answers: [
            { text: "Chỉ cho phép nộp hồ sơ trực tuyến", correct: false },
            { text: "Cho phép nộp hồ sơ trực tuyến và thanh toán trực tuyến", correct: false },
            { text: "Cho phép nộp hồ sơ trực tuyến, thanh toán trực tuyến và nhận kết quả trực tuyến hoặc qua bưu điện", correct: true },
            { text: "Chỉ cung cấp thông tin về thủ tục", correct: false }
        ]
    },
    {
        question: "Chữ ký số có thể được sử dụng trong các giao dịch hành chính công trực tuyến không?",
        answers: [
            { text: "Không thể sử dụng", correct: false },
            { text: "Có thể sử dụng để ký các văn bản điện tử", correct: true },
            { text: "Chỉ dùng để ký email", correct: false },
            { text: "Chỉ dùng để ký hình ảnh", correct: false }
        ]
    },
    {
        question: "Khi nộp hồ sơ trực tuyến, cần chú ý điều gì về định dạng tệp đính kèm?",
        answers: [
            { text: "Định dạng nào cũng được", correct: false },
            { text: "Cần tuân thủ các định dạng được quy định trên Cổng Dịch vụ công", correct: true },
            { text: "Chỉ chấp nhận file ảnh", correct: false },
            { text: "Chỉ chấp nhận file nén", correct: false }
        ]
    },
    {
        question: "Việc khai thác thông tin từ Cơ sở dữ liệu quốc gia về dân cư thông qua VNeID giúp ích gì?",
        answers: [
            { text: "Tra cứu thông tin cá nhân", correct: false },
            { text: "Giảm yêu cầu xuất trình giấy tờ nhiều lần", correct: false },
            { text: "Đảm bảo tính chính xác của thông tin", correct: false },
            { text: "Tất cả các lợi ích trên", correct: true }
        ]
    },
    {
        question: "Ứng dụng VNeID có thể hiển thị những thông tin nào đã được tích hợp?",
        answers: [
            { text: "Thông tin thẻ BHYT", correct: false },
            { text: "Thông tin giấy phép lái xe", correct: false },
            { text: "Thông tin đăng ký xe", correct: false },
            { text: "Tất cả các thông tin trên (nếu đã tích hợp thành công)", correct: true }
        ]
    },
    {
        question: "Khi quên mật khẩu đăng nhập Cổng Dịch vụ công Quốc gia, cần làm gì?",
        answers: [
            { text: "Tạo tài khoản mới", correct: false },
            { text: "Sử dụng chức năng quên mật khẩu và làm theo hướng dẫn", correct: true },
            { text: "Đến cơ quan nhà nước để lấy lại", correct: false },
            { text: "Nhờ người khác đăng nhập hộ", correct: false }
        ]
    },
    {
        question: "Hệ thống thông tin giải quyết thủ tục hành chính cấp bộ, cấp tỉnh được gọi chung là gì?",
        answers: [
            { text: "Cổng thông tin điện tử", correct: false },
            { text: "Hệ thống một cửa điện tử", correct: true },
            { text: "Cổng Dịch vụ công", correct: false },
            { text: "Hệ thống quản lý văn bản", correct: false }
        ]
    },
    {
        question: "Lợi ích của việc theo dõi tình trạng hồ sơ trực tuyến là gì?",
        answers: [
            { text: "Biết được tiến độ giải quyết hồ sơ", correct: false },
            { text: "Chủ động về thời gian nhận kết quả", correct: false },
            { text: "Không cần đến trực tiếp cơ quan", correct: false },
            { text: "Tất cả các lợi ích trên", correct: true }
        ]
    },
    {
        question: "Việc cung cấp dịch vụ công trực tuyến giúp cơ quan nhà nước điều gì?",
        answers: [
            { text: "Giảm tải công việc giấy tờ", correct: false },
            { text: "Tăng tính công khai, minh bạch", correct: false },
            { text: "Phục vụ người dân tốt hơn", correct: false },
            { text: "Tất cả các điều trên", correct: true }
        ]
    },
    {
        question: "Khi nhận được thông báo giả mạo về hồ sơ dịch vụ công trực tuyến, cần làm gì?",
        answers: [
            { text: "Làm theo hướng dẫn trong thông báo", correct: false },
            { text: "Cung cấp thông tin cá nhân theo yêu cầu", correct: false },
            { text: "Kiểm tra thông tin trên Cổng Dịch vụ công chính thức hoặc liên hệ cơ quan", correct: true },
            { text: "Bỏ qua không làm gì", correct: false }
        ]
    },
    {
        question: "Định danh điện tử VNeID có giá trị sử dụng ở đâu?",
        answers: [
            { text: "Chỉ trong tỉnh/thành phố đăng ký", correct: false },
            { text: "Trên toàn quốc và thay thế các giấy tờ đã tích hợp", correct: true },
            { text: "Chỉ khi đi du lịch", correct: false },
            { text: "Chỉ dùng để đăng nhập website", correct: false }
        ]
    },
    {
        question: "Làm sao để biết một dịch vụ công có hỗ trợ trực tuyến hay không?",
        answers: [
            { text: "Hỏi người dân khác", correct: false },
            { text: "Tra cứu trên Cổng Dịch vụ công Quốc gia hoặc cổng dịch vụ công cấp bộ/tỉnh", correct: true },
            { text: "Đến trực tiếp cơ quan để hỏi", correct: false },
            { text: "Xem quảng cáo trên TV", correct: false }
        ]
    },
    {
        question: "Vai trò của Cơ sở dữ liệu quốc gia về dân cư trong định danh điện tử là gì?",
        answers: [
            { text: "Lưu trữ thông tin cá nhân của công dân", correct: false },
            { text: "Cung cấp thông tin xác thực cho định danh điện tử", correct: false },
            { text: "Kết nối với các cơ sở dữ liệu chuyên ngành khác", correct: false },
            { text: "Tất cả các vai trò trên", correct: true }
        ]
    },
    {
        question: "Thanh toán phí dịch vụ công trực tuyến có những hình thức nào phổ biến?",
        answers: [
            { text: "Chỉ bằng thẻ ngân hàng", correct: false },
            { text: "Qua ví điện tử, tài khoản ngân hàng, Mobile Money", correct: true },
            { text: "Chỉ bằng tiền mặt", correct: false },
            { text: "Chỉ qua bưu điện", correct: false }
        ]
    },
    {
        question: "Khi nộp hồ sơ trực tuyến, cần đảm bảo điều gì về chất lượng ảnh chụp/scan giấy tờ?",
        answers: [
            { text: "Chụp càng mờ càng tốt", correct: false },
            { text: "Ảnh/scan rõ nét, đầy đủ thông tin, đúng định dạng", correct: true },
            { text: "Chỉ chụp một phần giấy tờ", correct: false },
            { text: "Không cần chụp giấy tờ", correct: false }
        ]
    },
    {
        question: "Người dân có thể tra cứu thông tin gì trên Cổng Dịch vụ công Quốc gia?",
        answers: [
            { text: "Thông tin về thủ tục hành chính", correct: false },
            { text: "Tình trạng giải quyết hồ sơ", correct: false },
            { text: "Thông tin liên hệ của cơ quan giải quyết", correct: false },
            { text: "Tất cả các thông tin trên", correct: true }
        ]
    },
    {
        question: "Khi sử dụng dịch vụ công trực tuyến, làm sao để nhận kết quả hồ sơ?",
        answers: [
            { text: "Đến trực tiếp cơ quan nhận", correct: false },
            { text: "Nhận qua bưu điện", correct: false },
            { text: "Nhận bản điện tử trên Cổng Dịch vụ công hoặc qua email/SMS", correct: false },
            { text: "Tất cả các hình thức trên tùy thủ tục", correct: true }
        ]
    },
    {
        question: "Mục tiêu của việc triển khai dịch vụ công trực tuyến là gì?",
        answers: [
            { text: "Giảm sự tương tác giữa người dân và cán bộ", correct: false },
            { text: "Nâng cao chất lượng phục vụ người dân và doanh nghiệp", correct: true },
            { text: "Tăng cường công việc cho cán bộ", correct: false },
            { text: "Chỉ để hiện đại hóa", correct: false }
        ]
    },
    {
        question: "Khi sử dụng tài khoản VNeID để đăng nhập Cổng Dịch vụ công Quốc gia, có cần đăng ký tài khoản riêng trên Cổng nữa không?",
        answers: [
            { text: "Vẫn cần đăng ký tài khoản riêng", correct: false },
            { text: "Không cần đăng ký tài khoản riêng trên Cổng Dịch vụ công Quốc gia nữa", correct: true },
            { text: "Tùy từng trường hợp", correct: false },
            { text: "Chỉ dùng VNeID để tra cứu", correct: false }
        ]
    },
    {
        question: "Thông tin về cư trú của công dân có thể được kiểm tra qua VNeID không?",
        answers: [
            { text: "Không thể kiểm tra", correct: false },
            { text: "Có thể kiểm tra nếu thông tin đã được cập nhật và tích hợp", correct: true },
            { text: "Chỉ kiểm tra được thông tin tạm trú", correct: false },
            { text: "Chỉ kiểm tra được thông tin thường trú", correct: false }
        ]
    },
    {
        question: "Việc sử dụng dịch vụ công trực tuyến giúp tiết kiệm những chi phí nào?",
        answers: [
            { text: "Chi phí đi lại", correct: false },
            { text: "Chi phí in ấn hồ sơ", correct: false },
            { text: "Chi phí thời gian chờ đợi", correct: false },
            { text: "Tất cả các chi phí trên", correct: true }
        ]
    },
    {
        question: "Khi nộp hồ sơ trực tuyến, làm sao để biết hồ sơ đã được gửi thành công?",
        answers: [
            { text: "Không có thông báo", correct: false },
            { text: "Hệ thống sẽ có thông báo nộp thành công và cung cấp mã số hồ sơ", correct: true },
            { text: "Chỉ cần thấy nút gửi", correct: false },
            { text: "Gửi xong là được", correct: false }
        ]
    },
    {
        question: "Có thể ủy quyền cho người khác sử dụng tài khoản định danh điện tử của mình không?",
        answers: [
            { text: "Có thể ủy quyền tùy ý", correct: false },
            { text: "Không được ủy quyền, tài khoản định danh điện tử là của cá nhân và phải tự quản lý", correct: true },
            { text: "Chỉ ủy quyền cho người thân", correct: false },
            { text: "Chỉ ủy quyền khi đi vắng", correct: false }
        ]
    },
    {
        question: "Khi thực hiện thủ tục hành chính trực tuyến mà gặp lỗi hệ thống, cần làm gì?",
        answers: [
            { text: "Bỏ qua không làm nữa", correct: false },
            { text: "Thử lại sau", correct: false },
            { text: "Liên hệ bộ phận hỗ trợ kỹ thuật của Cổng Dịch vụ công hoặc cơ quan liên quan", correct: true },
            { text: "Tự sửa lỗi", correct: false }
        ]
    },
    {
        question: "Lợi ích của việc sử dụng chữ ký số trong hành chính công trực tuyến là gì?",
        answers: [
            { text: "Thay thế chữ ký tay trên văn bản điện tử", correct: false },
            { text: "Đảm bảo tính toàn vẹn và chống chối bỏ của văn bản", correct: false },
            { text: "Rút ngắn thời gian xử lý hồ sơ", correct: false },
            { text: "Tất cả các lợi ích trên", correct: true }
        ]
    },
    {
        question: "Các thông báo liên quan đến giải quyết hồ sơ dịch vụ công trực tuyến thường được gửi qua đâu?",
        answers: [
            { text: "Chỉ qua bưu điện", correct: false },
            { text: "Qua email, SMS, hoặc trên Cổng Dịch vụ công/ứng dụng VNeID", correct: true },
            { text: "Chỉ gọi điện thoại thông báo", correct: false },
            { text: "Chỉ gửi qua mạng xã hội", correct: false }
        ]
    },
    {
        question: "Khi cần bổ sung hồ sơ cho thủ tục hành chính trực tuyến, làm sao để thực hiện?",
        answers: [
            { text: "Nộp lại hồ sơ từ đầu", correct: false },
            { text: "Truy cập lại hồ sơ đã nộp trên Cổng Dịch vụ công và tải lên các tài liệu bổ sung theo yêu cầu", correct: true },
            { text: "Đến trực tiếp cơ quan để bổ sung", correct: false },
            { text: "Gửi qua email cá nhân", correct: false }
        ]
    },
    {
        question: "Định danh điện tử và hành chính công trực tuyến góp phần vào việc phòng chống tham nhũng như thế nào?",
        answers: [
            { text: "Không liên quan", correct: false },
            { text: "Tăng tính công khai, minh bạch, giảm tiếp xúc trực tiếp, hạn chế tiêu cực", correct: true },
            { text: "Làm tăng cơ hội tham nhũng", correct: false },
            { text: "Chỉ liên quan đến kinh tế", correct: false }
        ]
    },
    {
        question: "Để đảm bảo an toàn khi sử dụng Cổng Dịch vụ công Quốc gia, cần chú ý điều gì?",
        answers: [
            { text: "Đăng nhập ở nơi công cộng và lưu mật khẩu", correct: false },
            { text: "Chỉ truy cập qua địa chỉ chính thức (dichvucong.gov.vn) và bảo vệ tài khoản", correct: true },
            { text: "Chia sẻ tài khoản cho người khác", correct: false },
            { text: "Sử dụng mật khẩu yếu", correct: false }
        ]
    },
    {
        question: "Chức năng chính của trình duyệt web là gì?",
        answers: [
            { text: "Soạn thảo văn bản", correct: false },
            { text: "Vẽ hình", correct: false },
            { text: "Truy cập Internet", correct: true },
            { text: "Nghe nhạc", correct: false }
        ]
    },
    {
        question: "Email là gì?",
        answers: [
            { text: "Tin nhắn văn bản", correct: false },
            { text: "Hộp thư điện tử", correct: true },
            { text: "Trang web", correct: false },
            { text: "Phần mềm diệt virus", correct: false }
        ]
    },
    {
        question: "Thiết bị nào được sử dụng để nhập dữ liệu bằng cách chạm vào màn hình?",
        answers: [
            { text: "Bàn phím", correct: false },
            { text: "Chuột", correct: false },
            { text: "Màn hình cảm ứng", correct: true },
            { text: "Máy in", correct: false }
        ]
    },
    {
        question: "Công nghệ nào cho phép thanh toán không dùng tiền mặt bằng cách chạm điện thoại vào máy POS?",
        answers: [
            { text: "Bluetooth", correct: false },
            { text: "Wi-Fi", correct: false },
            { text: "NFC (Near-Field Communication)", correct: true },
            { text: "Hồng ngoại", correct: false }
        ]
    },
    {
        question: "Để bảo vệ tài khoản trực tuyến, ngoài mật khẩu, bạn có thể sử dụng phương pháp bảo mật nào khác?",
        answers: [
            { text: "Chia sẻ mật khẩu cho bạn bè", correct: false },
            { text: "Xác thực hai yếu tố (2FA)", correct: true },
            { text: "Ghi mật khẩu ra giấy dán lên màn hình", correct: false },
            { text: "Sử dụng cùng một mật khẩu cho nhiều tài khoản", correct: false }
        ]
    },
    {
        question: "Khi nhận được cuộc gọi hoặc tin nhắn yêu cầu cung cấp mã OTP, bạn nên làm gì?",
        answers: [
            { text: "Cung cấp mã OTP ngay lập tức", correct: false },
            { text: "Từ chối cung cấp và kiểm tra lại giao dịch hoặc liên hệ ngân hàng/dịch vụ chính thức", correct: true },
            { text: "Chia sẻ cho người gọi nếu họ tự xưng là nhân viên ngân hàng", correct: false },
            { text: "Bỏ qua không làm gì", correct: false }
        ]
    },
    {
        question: "Phần mềm độc hại (malware) là gì?",
        answers: [
            { text: "Phần mềm giúp tăng tốc máy tính", correct: false },
            { text: "Phần mềm được thiết kế để gây hại hoặc truy cập trái phép vào hệ thống máy tính", correct: true },
            { text: "Phần mềm để vẽ đồ họa", correct: false },
            { text: "Phần mềm chơi nhạc", correct: false }
        ]
    },
    {
        question: "Đâu là ví dụ về nền tảng học trực tuyến phổ biến tại Việt Nam?",
        answers: [
            { text: "Shopee", correct: false },
            { text: "Lazada", correct: false },
            { text: "Zoom/Google Meet/Microsoft Teams", correct: true },
            { text: "Grab", correct: false }
        ]
    },
    {
        question: "Để tham gia lớp học trực tuyến, bạn cần có những thiết bị gì?",
        answers: [
            { text: "Máy chơi game", correct: false },
            { text: "Điện thoại hoặc máy tính có kết nối Internet và phần mềm học trực tuyến", correct: true },
            { text: "Máy in và giấy", correct: false },
            { text: "Chỉ cần tivi", correct: false }
        ]
    },
    {
        question: "Khi tìm kiếm thông tin trên Internet, làm sao để đánh giá độ tin cậy của một website?",
        answers: [
            { text: "Xem website có giao diện đẹp không", correct: false },
            { text: "Kiểm tra nguồn thông tin, tác giả, ngày cập nhật, và so sánh với các nguồn uy tín khác", correct: true },
            { text: "Tin vào tất cả những gì đọc được", correct: false },
            { text: "Xem số lượng người truy cập", correct: false }
        ]
    },
    {
        question: "Đâu là ví dụ về dịch vụ công trực tuyến?",
        answers: [
            { text: "Mua sắm online", correct: false },
            { text: "Xem phim trực tuyến", correct: false },
            { text: "Đăng ký tạm trú/tạm vắng qua mạng", correct: true },
            { text: "Chơi game online", correct: false }
        ]
    },
    {
        question: "Khi sử dụng mạng xã hội, hành vi nào sau đây là nên tránh?",
        answers: [
            { text: "Chia sẻ khoảnh khắc đời thường với bạn bè", correct: false },
            { text: "Tham gia các hội nhóm học tập", correct: false },
            { text: "Tiết lộ quá nhiều thông tin cá nhân nhạy cảm (số điện thoại, địa chỉ nhà, số CMND)", correct: true },
            { text: "Kết nối với người thân", correct: false }
        ]
    },
    {
        question: "Ứng dụng nào thường được sử dụng để liên lạc bằng văn bản và giọng nói qua Internet?",
        answers: [
            { text: "Google Sheets", correct: false },
            { text: "Microsoft Word", correct: false },
            { text: "Zalo/Viber/WhatsApp", correct: true },
            { text: "Adobe Photoshop", correct: false }
        ]
    },
    {
        question: "Lợi ích chính của mua sắm trực tuyến (online shopping) là gì?",
        answers: [
            { text: "Tốn nhiều thời gian đi lại", correct: false },
            { text: "Có nhiều lựa chọn sản phẩm, so sánh giá dễ dàng, mua sắm mọi lúc mọi nơi", correct: true },
            { text: "Chỉ mua được một số ít sản phẩm", correct: false },
            { text: "Giá cả luôn đắt hơn mua trực tiếp", correct: false }
        ]
    },
    {
        question: "Khi bán hàng trực tuyến, bạn cần chú ý điều gì để tạo uy tín?",
        answers: [
            { text: "Đăng thông tin sản phẩm sai sự thật", correct: false },
            { text: "Sử dụng hình ảnh sản phẩm kém chất lượng", correct: false },
            { text: "Cung cấp thông tin liên hệ rõ ràng, mô tả sản phẩm chính xác, phản hồi khách hàng nhanh chóng", correct: true },
            { text: "Không cần quan tâm đến đánh giá của khách hàng", correct: false }
        ]
    },
    {
        question: "Công nghệ nào giúp các thiết bị trong nhà (đèn, quạt, tivi...) kết nối và điều khiển từ xa qua điện thoại?",
        answers: [
            { text: "Công nghệ 2G", correct: false },
            { text: "Công nghệ nhà thông minh (Smart Home)", correct: true },
            { text: "Công nghệ in 3D", correct: false },
            { text: "Công nghệ thực tế ảo", correct: false }
        ]
    },
    {
        question: "Để đảm bảo an toàn cho trẻ em khi sử dụng Internet, phụ huynh nên làm gì?",
        answers: [
            { text: "Cho trẻ tự do truy cập bất kỳ nội dung nào", correct: false },
            { text: "Thiết lập các biện pháp kiểm soát truy cập, hướng dẫn trẻ về an toàn trực tuyến, đồng hành cùng trẻ khi sử dụng mạng", correct: true },
            { text: "Không cho trẻ sử dụng bất kỳ thiết bị điện tử nào", correct: false },
            { text: "Mặc kệ trẻ muốn làm gì thì làm", correct: false }
        ]
    },
    {
        question: "Khi điện thoại hoặc máy tính hoạt động chậm, bạn nên làm gì trước tiên?",
        answers: [
            { text: "Mua thiết bị mới ngay lập tức", correct: false },
            { text: "Khởi động lại thiết bị, xóa bớt ứng dụng không cần thiết, kiểm tra virus", correct: true },
            { text: "Đập bỏ thiết bị", correct: false },
            { text: "Để nguyên và hy vọng nó nhanh lên", correct: false }
        ]
    },
    {
        question: "Lợi ích của việc sao lưu dữ liệu (backup) là gì?",
        answers: [
            { text: "Làm tốn dung lượng lưu trữ", correct: false },
            { text: "Giúp khôi phục lại dữ liệu khi thiết bị gặp sự cố hoặc bị mất", correct: true },
            { text: "Không có lợi ích gì", correct: false },
            { text: "Chỉ làm cho máy tính chậm hơn", correct: false }
        ]
    },
    {
        question: "Phần mềm nào sau đây dùng để gõ văn bản?",
        answers: [
            { text: "Excel", correct: false },
            { text: "PowerPoint", correct: false },
            { text: "Word", correct: true },
            { text: "Photoshop", correct: false }
        ]
    },
    {
        question: "Tác hại của việc sử dụng thiết bị số quá lâu là gì?",
        answers: [
            { text: "Tăng khả năng tập trung", correct: false },
            { text: "Tăng cường trí nhớ", correct: false },
            { text: "Mỏi mắt, giảm chú ý", correct: true },
            { text: "Không ảnh hưởng", correct: false }
        ]
    },
    {
        question: "Mạng xã hội phổ biến nhất ở Việt Nam hiện nay là:",
        answers: [
            { text: "Facebook", correct: true },
            { text: "Twitter", correct: false },
            { text: "TikTok", correct: false },
            { text: "Instagram", correct: false }
        ]
    },
    {
        question: "Khi nhận được tin nhắn lạ chứa liên kết, bạn nên:",
        answers: [
            { text: "Mở ngay liên kết", correct: false },
            { text: "Chia sẻ cho người khác", correct: false },
            { text: "Bỏ qua hoặc xóa", correct: true },
            { text: "Trả lời lại", correct: false }
        ]
    },
    {
        question: "Thiết bị nào sau đây KHÔNG phải là thiết bị thông minh?",
        answers: [
            { text: "Máy tính bảng", correct: false },
            { text: "Điện thoại cục gạch", correct: true },
            { text: "Laptop", correct: false },
            { text: "Điện thoại thông minh", correct: false }
        ]
    },
    {
        question: "Lưu trữ đám mây là gì?",
        answers: [
            { text: "Lưu trên ổ cứng", correct: false },
            { text: "Lưu dữ liệu trên Internet", correct: true },
            { text: "Lưu vào USB", correct: false },
            { text: "Lưu trên giấy", correct: false }
        ]
    },
    {
        question: "Khi sử dụng Internet, cần tuân thủ điều gì?",
        answers: [
            { text: "Tự do tuyệt đối", correct: false },
            { text: "Không cần kiểm soát", correct: false },
            { text: "Quy định pháp luật và đạo đức", correct: true },
            { text: "Chỉ cần biết dùng", correct: false }
        ]
    },
    {
        question: "Đâu là phần mềm dùng để trình chiếu?",
        answers: [
            { text: "Word", correct: false },
            { text: "Excel", correct: false },
            { text: "PowerPoint", correct: true },
            { text: "Paint", correct: false }
        ]
    },
    {
        question: "Muốn tìm kiếm thông tin trên Internet, bạn dùng gì?",
        answers: [
            { text: "Trình duyệt web", correct: true },
            { text: "Máy in", correct: false },
            { text: "Webcam", correct: false },
            { text: "Bàn phím", correct: false }
        ]
    },
    {
        question: "Thông tin cá nhân nên được chia sẻ như thế nào trên mạng?",
        answers: [
            { text: "Công khai mọi nơi", correct: false },
            { text: "Chỉ chia sẻ với người tin cậy", correct: true },
            { text: "Gửi cho người lạ", correct: false },
            { text: "Đăng lên mạng xã hội", correct: false }
        ]
    },
    {
        question: "Ứng dụng nào dùng để gọi video?",
        answers: [
            { text: "YouTube", correct: false },
            { text: "Zalo", correct: true },
            { text: "Facebook", correct: false },
            { text: "Google Maps", correct: false }
        ]
    },
    {
        question: "Khi cài đặt phần mềm, bạn nên:",
        answers: [
            { text: "Cài tất cả không kiểm tra", correct: false },
            { text: "Đọc kỹ quyền truy cập trước khi chấp nhận", correct: true },
            { text: "Cài phần mềm lạ từ Internet", correct: false },
            { text: "Không cần kiểm tra gì cả", correct: false }
        ]
    },
    {
        question: "Thiết bị nào có thể chụp ảnh?",
        answers: [
            { text: "Máy giặt", correct: false },
            { text: "Bàn phím", correct: false },
            { text: "Điện thoại thông minh", correct: true },
            { text: "Chuột máy tính", correct: false }
        ]
    },
    {
        question: "Công nghệ nào giúp kết nối không dây giữa các thiết bị gần nhau?",
        answers: [
            { text: "Bluetooth", correct: true },
            { text: "USB", correct: false },
            { text: "HDMI", correct: false },
            { text: "Dây mạng", correct: false }
        ]
    },
    {
        question: "Khi điện thoại yêu cầu cập nhật phần mềm, bạn nên:",
        answers: [
            { text: "Luôn từ chối", correct: false },
            { text: "Tắt nguồn", correct: false },
            { text: "Cập nhật để tăng bảo mật và hiệu năng", correct: true },
            { text: "Gỡ ứng dụng", correct: false }
        ]
    },
    {
        question: "“Tin giả” là gì?",
        answers: [
            { text: "Thông tin đúng", correct: false },
            { text: "Thông tin sai lệch, bịa đặt", correct: true },
            { text: "Thông tin chính thức", correct: false },
            { text: "Bài viết hài hước", correct: false }
        ]
    },
    {
        question: "Ví dụ về hành vi vi phạm pháp luật trên mạng là:",
        answers: [
            { text: "Đăng ảnh cá nhân", correct: false },
            { text: "Bình luận tích cực", correct: false },
            { text: "Phát tán tin giả, xúc phạm người khác", correct: true },
            { text: "Mua hàng online", correct: false }
        ]
    },
    {
        question: "Mật khẩu mạnh nên bao gồm:",
        answers: [
            { text: "Toàn chữ thường", correct: false },
            { text: "Tên người thân", correct: false },
            { text: "Ký tự đặc biệt, số và chữ", correct: true },
            { text: "Ngày sinh", correct: false }
        ]
    },
    {
        question: "Google Translate là công cụ dùng để:",
        answers: [
            { text: "Tạo ảnh", correct: false },
            { text: "Dịch ngôn ngữ", correct: true },
            { text: "Chơi game", correct: false },
            { text: "Vẽ bản đồ", correct: false }
        ]
    },
    {
        question: "Cần làm gì để bảo vệ thiết bị khỏi virus?",
        answers: [
            { text: "Tắt mạng", correct: false },
            { text: "Cài phần mềm diệt virus", correct: true },
            { text: "Không dùng thiết bị", correct: false },
            { text: "Tăng độ sáng màn hình", correct: false }
        ]
    },
    {
        question: "Chia sẻ thông tin sai sự thật trên mạng là:",
        answers: [
            { text: "Được phép", correct: false },
            { text: "Không bị sao cả", correct: false },
            { text: "Hành vi vi phạm", correct: true },
            { text: "Cách kiếm lượt xem", correct: false }
        ]
    },
    {
        question: "Các thiết bị thông minh có thể kết nối với nhau qua:",
        answers: [
            { text: "Internet", correct: true },
            { text: "Giấy viết", correct: false },
            { text: "Âm thanh", correct: false },
            { text: "Mực in", correct: false }
        ]
    },
    {
        question: "Tài khoản mạng xã hội nên có:",
        answers: [
            { text: "Thông tin thật", correct: true },
            { text: "Ảnh người nổi tiếng", correct: false },
            { text: "Không cần thông tin", correct: false },
            { text: "Mật khẩu yếu", correct: false }
        ]
    },
    {
        question: "Để nhận tiền trợ cấp online, người dân cần có:",
        answers: [
            { text: "CMND giấy", correct: false },
            { text: "Giấy xác nhận viết tay", correct: false },
            { text: "Tài khoản ngân hàng hoặc ví điện tử", correct: true },
            { text: "Sổ hộ khẩu", correct: false }
        ]
    },
    {
        question: "Mạng xã hội có thể gây hại nếu:",
        answers: [
            { text: "Sử dụng hợp lý", correct: false },
            { text: "Sử dụng quá nhiều và thiếu kiểm soát", correct: true },
            { text: "Dùng để học tập", correct: false },
            { text: "Dùng để chia sẻ thông tin chính thống", correct: false }
        ]
    },
    {
        question: "Hình thức tấn công phổ biến qua mạng là:",
        answers: [
            { text: "Phishing (giả mạo để đánh cắp thông tin)", correct: true },
            { text: "Hút bụi", correct: false },
            { text: "Gọi điện thoại", correct: false },
            { text: "Chơi game", correct: false }
        ]
    },
    {
        question: "Ứng dụng Zalo có thể dùng để:",
        answers: [
            { text: "Nấu ăn", correct: false },
            { text: "Mua đất", correct: false },
            { text: "Nhắn tin, gọi điện, gửi tài liệu", correct: true },
            { text: "Viết sách", correct: false }
        ]
    },
    {
        question: "Muốn học trực tuyến, bạn cần:",
        answers: [
            { text: "Tivi", correct: false },
            { text: "Bảng trắng", correct: false },
            { text: "Điện thoại hoặc máy tính có Internet", correct: true },
            { text: "Giấy viết", correct: false }
        ]
    },
    {
        question: "Đăng nhập tài khoản ở nơi công cộng nên:",
        answers: [
            { text: "Không cần đăng xuất", correct: false },
            { text: "Lưu mật khẩu", correct: false },
            { text: "Đăng xuất sau khi sử dụng", correct: true },
            { text: "Giao máy cho người khác", correct: false }
        ]
    },
    {
        question: "Để đảm bảo an toàn khi dùng mạng xã hội, nên:",
        answers: [
            { text: "Tin mọi thông tin", correct: false },
            { text: "Không kiểm tra nguồn", correct: false },
            { text: "Chỉ chia sẻ thông tin từ nguồn uy tín", correct: true },
            { text: "Đăng bất kỳ gì mình muốn", correct: false }
        ]
    },
    {
        question: "Mục đích của mã OTP là gì?",
        answers: [
            { text: "Làm đẹp giao diện", correct: false },
            { text: "Mã dùng 1 lần để xác minh", correct: true },
            { text: "Đổi hình nền", correct: false },
            { text: "Mở khóa wifi", correct: false }
        ]
    },
    {
        question: "Đâu là ví điện tử phổ biến ở Việt Nam?",
        answers: [
            { text: "TikTok", correct: false },
            { text: "Shopee", correct: false },
            { text: "MoMo", correct: true },
            { text: "Excel", correct: false }
        ]
    },
    {
        question: "Đăng nhập vào tài khoản ngân hàng điện tử nên dùng gì?",
        answers: [
            { text: "Tên người yêu", correct: false },
            { text: "Mật khẩu đơn giản", correct: false },
            { text: "Mật khẩu mạnh và mã OTP", correct: true },
            { text: "Chia sẻ cho người thân", correct: false }
        ]
    },
    {
        question: "“Tấn công mạng” là:",
        answers: [
            { text: "Chơi game trực tuyến", correct: false },
            { text: "Học trực tuyến", correct: false },
            { text: "Hành vi xâm nhập, phá hoại qua Internet", correct: true },
            { text: "Gửi email bình thường", correct: false }
        ]
    },
    {
        question: "Ứng dụng nào hỗ trợ định vị và chỉ đường?",
        answers: [
            { text: "Excel", correct: false },
            { text: "Google Maps", correct: true },
            { text: "Facebook", correct: false },
            { text: "Zalo", correct: false }
        ]
    },
    {
        question: "Zalo là ứng dụng của nước nào phát triển?",
        answers: [
            { text: "Nhật Bản", correct: false },
            { text: "Mỹ", correct: false },
            { text: "Việt Nam", correct: true },
            { text: "Hàn Quốc", correct: false }
        ]
    },
    {
        question: "Tại sao không nên chia sẻ mật khẩu?",
        answers: [
            { text: "Mất quyền kiểm soát tài khoản", correct: true },
            { text: "Giúp người khác dễ dùng", correct: false },
            { text: "Không sao cả", correct: false },
            { text: "Đỡ mất công nhớ", correct: false }
        ]
    },
    {
        question: "Ứng dụng nào giúp chỉnh sửa văn bản?",
        answers: [
            { text: "Word", correct: true },
            { text: "TikTok", correct: false },
            { text: "YouTube", correct: false },
            { text: "Paint", correct: false }
        ]
    },
    {
        question: "Các thiết bị nào sau đây được gọi là thiết bị đầu vào?",
        answers: [
            { text: "Loa", correct: false },
            { text: "Bàn phím, chuột", correct: true },
            { text: "Màn hình", correct: false },
            { text: "Máy in", correct: false }
        ]
    },
    {
        question: "Email rác thường chứa:",
        answers: [
            { text: "Lời mời lừa đảo, quảng cáo", correct: true },
            { text: "Tin tức chính thống", correct: false },
            { text: "Tài liệu học tập", correct: false },
            { text: "Bài tập về nhà", correct: false }
        ]
    },
    {
        question: "Hành vi nào là vi phạm đạo đức trên mạng?",
        answers: [
            { text: "Chia sẻ tin đúng", correct: false },
            { text: "Giúp đỡ cộng đồng", correct: false },
            { text: "Bình luận xúc phạm, phân biệt", correct: true },
            { text: "Đọc tin tức", correct: false }
        ]
    },
    {
        question: "Để xem video hướng dẫn học tập, bạn nên vào đâu?",
        answers: [
            { text: "Google Maps", correct: false },
            { text: "Excel", correct: false },
            { text: "YouTube", correct: true },
            { text: "Zing MP3", correct: false }
        ]
    },
    {
        question: "Khi tài khoản mạng xã hội bị mất quyền truy cập, bạn nên:",
        answers: [
            { text: "Bỏ qua", correct: false },
            { text: "Tạo tài khoản mới", correct: false },
            { text: "Báo cáo vi phạm và lấy lại qua email", correct: true },
            { text: "Nhờ người khác lấy giùm", correct: false }
        ]
    },
    {
        question: "Ứng dụng nào sau đây giúp họp, học trực tuyến?",
        answers: [
            { text: "Zoom", correct: true },
            { text: "Paint", correct: false },
            { text: "TikTok", correct: false },
            { text: "CapCut", correct: false }
        ]
    },
    {
        question: "“Tin nhắn rác” là:",
        answers: [
            { text: "Tin quan trọng", correct: false },
            { text: "Tin từ bạn bè", correct: false },
            { text: "Tin lặp lại, quảng cáo không mong muốn", correct: true },
            { text: "Tin ngân hàng", correct: false }
        ]
    },
    {
        question: "Để kiểm tra độ tin cậy của thông tin, bạn nên:",
        answers: [
            { text: "Đọc nhiều nguồn uy tín", correct: true },
            { text: "Tin vào cảm giác", correct: false },
            { text: "Hỏi bạn bè", correct: false },
            { text: "Xem lượt thích", correct: false }
        ]
    },
    {
        question: "Lợi ích của công nghệ số với người dân là:",
        answers: [
            { text: "Kết nối, học tập, mua sắm tiện lợi", correct: true },
            { text: "Tăng chi phí", correct: false },
            { text: "Tăng thời gian chờ đợi", correct: false },
            { text: "Không có lợi gì", correct: false }
        ]
    },
    {
        question: "Để tránh bị lừa đảo qua mạng, bạn cần:",
        answers: [
            { text: "Không cung cấp thông tin cá nhân", correct: true },
            { text: "Đọc kỹ các điều khoản dịch vụ", correct: false },
            { text: "Tin tưởng vào mọi lời mời", correct: false },
            { text: "Cung cấp tài khoản ngân hàng khi được yêu cầu", correct: false }
        ]
    },
    {
        question: "Phần mềm diệt virus giúp bảo vệ thiết bị khỏi:",
        answers: [
            { text: "Nhạc nền", correct: false },
            { text: "Virus, phần mềm độc hại", correct: true },
            { text: "Video", correct: false },
            { text: "Đồ họa", correct: false }
        ]
    },
    {
        question: "Để tăng hiệu suất làm việc trên máy tính, bạn cần:",
        answers: [
            { text: "Dùng nhiều ứng dụng cùng lúc", correct: false },
            { text: "Thường xuyên cập nhật phần mềm", correct: true },
            { text: "Dùng phần mềm lạ", correct: false },
            { text: "Tắt tất cả các ứng dụng", correct: false }
        ]
    },
    {
        question: "Những thiết bị nào dưới đây không cần kết nối Internet?",
        answers: [
            { text: "Máy tính", correct: false },
            { text: "Máy in", correct: true },
            { text: "Điện thoại thông minh", correct: false },
            { text: "Laptop", correct: false }
        ]
    },
    {
        question: "Cách nào để đảm bảo sự riêng tư trên Internet?",
        answers: [
            { text: "Sử dụng mật khẩu mạnh", correct: true },
            { text: "Dùng thông tin thật hết mức", correct: false },
            { text: "Chia sẻ mọi thông tin cá nhân", correct: false },
            { text: "Mở tất cả các liên kết", correct: false }
        ]
    },
    {
        question: "Các dịch vụ ngân hàng điện tử cho phép người dùng làm gì?",
        answers: [
            { text: "Gửi tiền trực tuyến", correct: true },
            { text: "Đọc tin tức", correct: false },
            { text: "Chơi game", correct: false },
            { text: "Xem video", correct: false }
        ]
    },
    {
        question: "Điều gì là nguy hiểm khi sử dụng Wi-Fi công cộng?",
        answers: [
            { text: "Wi-Fi miễn phí", correct: false },
            { text: "Mất kết nối nhanh", correct: false },
            { text: "Nguy cơ bị hack, đánh cắp thông tin", correct: true },
            { text: "Tín hiệu mạnh", correct: false }
        ]
    },
    {
        question: "Kết nối Bluetooth được sử dụng để:",
        answers: [
            { text: "Truyền tải dữ liệu qua mạng di động", correct: false },
            { text: "Kết nối các thiết bị gần nhau mà không cần dây", correct: true },
            { text: "Kết nối với điện thoại cố định", correct: false },
            { text: "Dùng để truyền hình ảnh từ xa", correct: false }
        ]
    },
    {
        question: "Bạn cần sử dụng ứng dụng nào để gọi video trực tiếp với người khác?",
        answers: [
            { text: "Facebook", correct: false },
            { text: "YouTube", correct: false },
            { text: "Google Meet", correct: true },
            { text: "Word", correct: false }
        ]
    },
    {
        question: "Bạn có thể mua hàng trực tuyến ở đâu?",
        answers: [
            { text: "Các website bán hàng", correct: true },
            { text: "Chỉ qua cửa hàng vật lý", correct: false },
            { text: "Qua quảng cáo trên TV", correct: false },
            { text: "Chỉ trên điện thoại", correct: false }
        ]
    },
    {
        question: "Các trò chơi trực tuyến có thể gây ra tác hại gì?",
        answers: [
            { text: "Giúp nâng cao kỹ năng giao tiếp", correct: false },
            { text: "Lãng phí thời gian nếu chơi quá nhiều", correct: true },
            { text: "Không ảnh hưởng gì", correct: false },
            { text: "Tăng cường trí nhớ", correct: false }
        ]
    },
    {
        question: "Dịch vụ “Cloud storage” là gì?",
        answers: [
            { text: "Lưu trữ dữ liệu trên đám mây, không cần thiết thiết bị vật lý", correct: true },
            { text: "Lưu trữ dữ liệu trên ổ cứng của bạn", correct: false },
            { text: "Chỉ lưu trữ dữ liệu âm thanh", correct: false },
            { text: "Lưu trữ video trực tiếp", correct: false }
        ]
    },
    {
        question: "Để chia sẻ hình ảnh với bạn bè qua mạng, bạn có thể dùng ứng dụng nào?",
        answers: [
            { text: "Google Photos", correct: false },
            { text: "Zalo", correct: false },
            { text: "Instagram", correct: false },
            { text: "Tất cả các lựa chọn trên", correct: true }
        ]
    },
    {
        question: "Đâu là nguyên tắc quan trọng khi sử dụng mạng xã hội?",
        answers: [
            { text: "Đăng mọi thứ về mình", correct: false },
            { text: "Bảo vệ quyền riêng tư của bản thân", correct: true },
            { text: "Chia sẻ mọi thông tin tài chính", correct: false },
            { text: "Đọc tất cả thông tin từ một nguồn", correct: false }
        ]
    },
    {
        question: "Hành vi nào sau đây là vi phạm khi sử dụng Internet?",
        answers: [
            { text: "Mua hàng trực tuyến", correct: false },
            { text: "Cung cấp thông tin cá nhân cho người lạ", correct: true },
            { text: "Tìm kiếm thông tin giáo dục", correct: false },
            { text: "Chia sẻ thông tin với bạn bè", correct: false }
        ]
    },
    {
        question: "Ví dụ nào sau đây là sử dụng Internet an toàn?",
        answers: [
            { text: "Đăng nhập tài khoản ngân hàng trên thiết bị công cộng", correct: false },
            { text: "Kiểm tra email từ nguồn không rõ", correct: false },
            { text: "Đảm bảo mật khẩu mạnh và không chia sẻ", correct: true },
            { text: "Dùng ứng dụng không rõ nguồn gốc", correct: false }
        ]
    },
    {
        question: "Những yếu tố nào giúp tạo mật khẩu an toàn?",
        answers: [
            { text: "Chỉ dùng ngày sinh", correct: false },
            { text: "Dùng tên người thân", correct: false },
            { text: "Kết hợp chữ, số, ký tự đặc biệt", correct: true },
            { text: "Đặt mật khẩu dễ nhớ", correct: false }
        ]
    },
    {
        question: "Tạo tài khoản email cần cung cấp thông tin gì?",
        answers: [
            { text: "Tên người dùng và mật khẩu", correct: true },
            { text: "Địa chỉ nhà", correct: false },
            { text: "Số điện thoại của bạn bè", correct: false },
            { text: "Địa chỉ ngân hàng", correct: false }
        ]
    },
    {
        question: "Tác hại của việc sử dụng mật khẩu yếu là gì?",
        answers: [
            { text: "Không thể đăng nhập vào tài khoản", correct: false },
            { text: "Dễ bị hack tài khoản", correct: true },
            { text: "Giúp tài khoản dễ nhớ hơn", correct: false },
            { text: "Không ảnh hưởng gì", correct: false }
        ]
    },
    {
        question: "Phần mềm chống virus giúp bảo vệ thiết bị khỏi:",
        answers: [
            { text: "Nhạc nền", correct: false },
            { text: "Virus, phần mềm độc hại", correct: true },
            { text: "Video", correct: false },
            { text: "Đồ họa", correct: false }
        ]
    },
    {
        question: "Khi cài đặt phần mềm trên máy tính, bạn cần chú ý điều gì?",
        answers: [
            { text: "Bỏ qua yêu cầu của phần mềm", correct: false },
            { text: "Tải phần mềm từ nguồn uy tín", correct: true },
            { text: "Cài phần mềm từ bất kỳ website nào", correct: false },
            { text: "Tắt tất cả các phần mềm diệt virus", correct: false }
        ]
    },
    {
        question: "Các website bán hàng trực tuyến thường yêu cầu thông tin gì?",
        answers: [
            { text: "Chỉ địa chỉ email", correct: false },
            { text: "Thông tin thẻ tín dụng và địa chỉ giao hàng", correct: true },
            { text: "Chỉ cần tên người mua", correct: false },
            { text: "Thông tin tài khoản mạng xã hội", correct: false }
        ]
    },
    {
        question: "Cần tránh làm gì khi sử dụng dịch vụ ngân hàng điện tử?",
        answers: [
            { text: "Chỉ truy cập qua mạng Wi-Fi bảo mật", correct: false },
            { text: "Cung cấp mật khẩu cho người khác", correct: true },
            { text: "Kiểm tra các giao dịch ngay", correct: false },
            { text: "Lưu mật khẩu trên máy tính", correct: false }
        ]
    },
    {
        question: "Một trong những mối nguy hiểm trên Internet là:",
        answers: [
            { text: "Gửi email cho bạn bè", correct: false },
            { text: "Tải phần mềm từ nguồn không rõ", correct: true },
            { text: "Xem video học trực tuyến", correct: false },
            { text: "Đọc sách điện tử", correct: false }
        ]
    },
    {
        question: "Một số phần mềm tạo sự tiện lợi trong việc quản lý tài chính cá nhân là:",
        answers: [
            { text: "Excel, Google Sheets", correct: true },
            { text: "Word, PowerPoint", correct: false },
            { text: "Tất cả các phần mềm đồ họa", correct: false },
            { text: "Trình duyệt web", correct: false }
        ]
    },
    {
        question: "Để sử dụng Google Drive, bạn cần có:",
        answers: [
            { text: "Tài khoản Google", correct: true },
            { text: "Phần mềm độc hại", correct: false },
            { text: "Tài khoản ngân hàng", correct: false },
            { text: "Máy tính bàn", correct: false }
        ]
    },
    {
        question: "Thông tin trên mạng có thể sai sự thật nếu:",
        answers: [
            { text: "Được đăng từ một website uy tín", correct: false },
            { text: "Chỉ là tin tức mới cập nhật", correct: false },
            { text: "Được đăng mà không kiểm chứng", correct: true },
            { text: "Được chia sẻ từ người thân", correct: false }
        ]
    },
    {
        question: "Chia sẻ tài liệu công việc qua mạng cần chú ý điều gì?",
        answers: [
            { text: "Chia sẻ tất cả các tài liệu với bạn bè", correct: false },
            { text: "Đảm bảo tài liệu không chứa thông tin nhạy cảm", correct: true },
            { text: "Đảm bảo tài liệu có độ bảo mật thấp", correct: false },
            { text: "Không cần kiểm tra trước khi chia sẻ", correct: false }
        ]
    },
    {
        question: "Để giữ an toàn khi mua hàng trực tuyến, bạn nên:",
        answers: [
            { text: "Mua hàng từ những website không rõ nguồn gốc", correct: false },
            { text: "Kiểm tra độ bảo mật của website", correct: true },
            { text: "Cung cấp thông tin thẻ tín dụng cho người bán", correct: false },
            { text: "Không kiểm tra thông tin người bán", correct: false }
        ]
    },
    {
        question: "Điều gì nên tránh khi sử dụng mạng xã hội?",
        answers: [
            { text: "Đọc thông tin giáo dục", correct: false },
            { text: "Chia sẻ thông tin cá nhân quá mức", correct: true },
            { text: "Đăng bài viết sáng tạo", correct: false },
            { text: "Chia sẻ thông tin từ nguồn uy tín", correct: false }
        ]
    },
    {
        question: "Để kiểm soát thời gian sử dụng điện thoại, bạn nên làm gì?",
        answers: [
            { text: "Dùng ứng dụng theo dõi thời gian sử dụng", correct: true },
            { text: "Không cần kiểm soát", correct: false },
            { text: "Chơi game suốt ngày", correct: false },
            { text: "Đọc báo liên tục", correct: false }
        ]
    },
    {
        question: "Một trong những lợi ích của việc sử dụng công nghệ số là gì?",
        answers: [
            { text: "Giảm hiệu quả công việc", correct: false },
            { text: "Tiết kiệm thời gian và công sức", correct: true },
            { text: "Làm việc ít hiệu quả hơn", correct: false },
            { text: "Không giúp ích gì", correct: false }
        ]
    },
{
        question: 'Thiết bị nào sau đây có thể kết nối Internet?',
        answers: [
            { text: 'Tivi thường', correct: false },
            { text: 'Đèn bàn', correct: false },
            { text: 'Điện thoại thông minh', correct: true },
            { text: 'Quạt máy', correct: false }
        ]
    },
    {
        question: 'Đâu là một ví dụ về mạng xã hội?',
        answers: [
            { text: 'Microsoft Word', correct: false },
            { text: 'Google Maps', correct: false },
            { text: 'Facebook', correct: true },
            { text: 'Máy tính Casio', correct: false }
        ]
    },
    {
        question: 'Để gửi thư điện tử (email), bạn cần có?',
        answers: [
            { text: 'Tài khoản email', correct: true },
            { text: 'Máy in', correct: false },
            { text: 'Điện thoại bàn', correct: false },
            { text: 'USB', correct: false }
        ]
    },
    {
        question: 'Thuật ngữ "Wi-Fi" liên quan đến?',
        answers: [
            { text: 'Kết nối mạng không dây', correct: true },
            { text: 'Pin dự phòng', correct: false },
            { text: 'Loa Bluetooth', correct: false },
            { text: 'Cáp sạc điện thoại', correct: false }
        ]
    },
    {
        question: 'Ứng dụng nào sau đây dùng để xem video trực tuyến?',
        answers: [
            { text: 'Zalo', correct: false },
            { text: 'Excel', correct: false },
            { text: 'YouTube', correct: true },
            { text: 'Calculator', correct: false }
        ]
    },
    {
        question: 'Phần mềm độc hại (virus) máy tính có thể gây ra điều gì?',
        answers: [
            { text: 'Làm máy chạy nhanh hơn', correct: false },
            { text: 'Tăng dung lượng lưu trữ', correct: false },
            { text: 'Đánh cắp thông tin cá nhân', correct: true },
            { text: 'Cải thiện chất lượng hình ảnh', correct: false }
        ]
    },
    {
        question: 'Đâu là một trình duyệt web phổ biến?',
        answers: [
            { text: 'Adobe Photoshop', correct: false },
            { text: 'WinRAR', correct: false },
            { text: 'Skype', correct: false },
            { text: 'Google Chrome', correct: true }
        ]
    },
    {
        question: 'Lưu trữ đám mây (Cloud Storage) là gì?',
        answers: [
            { text: 'Lưu dữ liệu trên ổ cứng máy tính', correct: false },
            { text: 'Lưu dữ liệu trên thẻ nhớ', correct: false },
            { text: 'Lưu dữ liệu trực tuyến trên máy chủ từ xa', correct: true },
            { text: 'Lưu dữ liệu trên đĩa CD', correct: false }
        ]
    },
    {
        question: 'Mật khẩu mạnh nên bao gồm những gì?',
        answers: [
            { text: 'Chỉ chữ cái thường', correct: false },
            { text: 'Tên của bạn', correct: false },
            { text: 'Kết hợp chữ hoa, chữ thường, số và ký tự đặc biệt', correct: true },
            { text: 'Ngày sinh của bạn', correct: false }
        ]
    },
    {
        question: 'Mã QR (QR Code) thường được sử dụng để làm gì?',
        answers: [
            { text: 'Nghe nhạc', correct: false },
            { text: 'Chỉnh sửa ảnh', correct: false },
            { text: 'Truy cập nhanh thông tin hoặc liên kết web', correct: true },
            { text: 'Soạn thảo văn bản', correct: false }
        ]
    },
    {
        question: 'GPS là viết tắt của hệ thống nào?',
        answers: [
            { text: 'Hệ thống định vị toàn cầu', correct: true },
            { text: 'Hệ thống giải trí gia đình', correct: false },
            { text: 'Hệ thống quản lý bán hàng', correct: false },
            { text: 'Hệ thống phòng cháy chữa cháy', correct: false }
        ]
    },
    {
        question: 'Định dạng tệp nào thường được sử dụng cho hình ảnh?',
        answers: [
            { text: '.mp3', correct: false },
            { text: '.docx', correct: false },
            { text: '.jpg', correct: true },
            { text: '.pdf', correct: false }
        ]
    },
    {
        question: 'Hệ điều hành nào được phát triển bởi Apple cho iPhone?',
        answers: [
            { text: 'Android', correct: false },
            { text: 'Windows', correct: false },
            { text: 'iOS', correct: true },
            { text: 'Linux', correct: false }
        ]
    },
    {
        question: 'CPU trong máy tính là viết tắt của?',
        answers: [
            { text: 'Bộ xử lý trung tâm', correct: true },
            { text: 'Card đồ họa', correct: false },
            { text: 'Bộ nhớ truy cập ngẫu nhiên', correct: false },
            { text: 'Ổ đĩa cứng', correct: false }
        ]
    },
    {
        question: '"Sao lưu" (Backup) dữ liệu có nghĩa là gì?',
        answers: [
            { text: 'Xóa dữ liệu vĩnh viễn', correct: false },
            { text: 'Chia sẻ dữ liệu với người khác', correct: false },
            { text: 'Mã hóa dữ liệu', correct: false },
            { text: 'Tạo bản sao của dữ liệu để phòng trường hợp mất mát', correct: true }
        ]
    },
    {
        question: 'Bluetooth là công nghệ dùng để làm gì?',
        answers: [
            { text: 'Kết nối Internet tốc độ cao', correct: false },
            { text: 'Lưu trữ dữ liệu trực tuyến', correct: false },
            { text: 'Thực hiện cuộc gọi video', correct: false },
            { text: 'Kết nối các thiết bị ở khoảng cách gần không cần dây', correct: true }
        ]
    },
    {
        question: 'Đâu là một ví dụ về thiết bị nhập (Input device) cho máy tính?',
        answers: [
            { text: 'Màn hình', correct: false },
            { text: 'Loa', correct: false },
            { text: 'Bàn phím', correct: true },
            { text: 'Máy in', correct: false }
        ]
    },
    {
        question: 'Thương mại điện tử (E-commerce) là gì?',
        answers: [
            { text: 'Gửi thư điện tử', correct: false },
            { text: 'Mua bán hàng hóa và dịch vụ qua Internet', correct: true },
            { text: 'Học trực tuyến', correct: false },
            { text: 'Chơi game online', correct: false }
        ]
    },
    {
        question: 'URL là viết tắt của?',
        answers: [
            { text: 'Universal Resource Locator (Địa chỉ tài nguyên thống nhất)', correct: true },
            { text: 'User Registration Link (Liên kết đăng ký người dùng)', correct: false },
            { text: 'Uniform Rendering Language (Ngôn ngữ kết xuất đồng nhất)', correct: false },
            { text: 'Underlying Routing Logic (Logic định tuyến cơ bản)', correct: false }
        ]
    },
    {
        question: 'Phần mềm nào dùng để tạo bảng tính?',
        answers: [
            { text: 'Microsoft Word', correct: false },
            { text: 'Microsoft Excel', correct: true },
            { text: 'Microsoft PowerPoint', correct: false },
            { text: 'Adobe Reader', correct: false }
        ]
    },
    {
        question: 'RAM trong máy tính là viết tắt của?',
        answers: [
            { text: 'Read Access Memory', correct: false },
            { text: 'Realtime Application Management', correct: false },
            { text: 'Remote Administration Module', correct: false },
            { text: 'Random Access Memory (Bộ nhớ truy cập ngẫu nhiên)', correct: true }
        ]
    },
    {
        question: 'HTTPS ở đầu địa chỉ web có ý nghĩa gì?',
        answers: [
            { text: 'Trang web này tải nhanh hơn', correct: false },
            { text: 'Đây là trang web chỉ dành cho thành viên', correct: false },
            { text: 'Kết nối đến trang web này được mã hóa và an toàn', correct: true },
            { text: 'Trang web này có nhiều hình ảnh', correct: false }
        ]
    },
    {
        question: 'AI là viết tắt của?',
        answers: [
            { text: 'Artificial Intelligence (Trí tuệ nhân tạo)', correct: true },
            { text: 'Automated Installation', correct: false },
            { text: 'Advanced Interface', correct: false },
            { text: 'Application Integration', correct: false }
        ]
    },
    {
        question: 'Làm thế nào để bảo vệ mắt khi sử dụng máy tính thường xuyên?',
        answers: [
            { text: 'Tăng độ sáng màn hình tối đa', correct: false },
            { text: 'Để màn hình gần mắt nhất có thể', correct: false },
            { text: 'Không bao giờ chớp mắt', correct: false },
            { text: 'Nghỉ giải lao và nhìn ra xa định kỳ', correct: true }
        ]
    },
    {
        question: 'Đâu là một ví dụ về phần cứng (Hardware) máy tính?',
        answers: [
            { text: 'Hệ điều hành Windows', correct: false },
            { text: 'Trình duyệt Chrome', correct: false },
            { text: 'Con chuột máy tính', correct: true },
            { text: 'Phần mềm diệt virus', correct: false }
        ]
    },
    {
        question: 'Spam trong email là gì?',
        answers: [
            { text: 'Thư quan trọng từ ngân hàng', correct: false },
            { text: 'Thư từ bạn bè và gia đình', correct: false },
            { text: 'Thư rác hoặc thư quảng cáo không mong muốn', correct: true },
            { text: 'Thư nháp chưa gửi', correct: false }
        ]
    },
    {
        question: 'Hệ điều hành Android thường được sử dụng trên thiết bị nào?',
        answers: [
            { text: 'Máy tính bảng và điện thoại thông minh (không phải của Apple)', correct: true },
            { text: 'Máy tính để bàn của Apple (iMac)', correct: false },
            { text: 'Máy tính xách tay MacBook', correct: false },
            { text: 'Đồng hồ Apple Watch', correct: false }
        ]
    },
    {
        question: 'Mạng LAN là viết tắt của?',
        answers: [
            { text: 'Large Area Network', correct: false },
            { text: 'Local Area Network (Mạng cục bộ)', correct: true },
            { text: 'Long Antenna Network', correct: false },
            { text: 'Logical Access Node', correct: false }
        ]
    },
    {
        question: 'Chức năng chính của tường lửa (Firewall) là gì?',
        answers: [
            { text: 'Tăng tốc độ Internet', correct: false },
            { text: 'Lưu trữ mật khẩu', correct: false },
            { text: 'Quét virus', correct: false },
            { text: 'Ngăn chặn truy cập trái phép vào mạng máy tính', correct: true }
        ]
    },
    {
        question: 'Định dạng tệp .PDF thường dùng để làm gì?',
        answers: [
            { text: 'Lưu trữ nhạc', correct: false },
            { text: 'Chỉnh sửa ảnh', correct: false },
            { text: 'Lập trình ứng dụng', correct: false },
            { text: 'Chia sẻ tài liệu mà vẫn giữ nguyên định dạng', correct: true }
        ]
    },
    {
        question: 'Thuật ngữ "Download" có nghĩa là gì?',
        answers: [
            { text: 'Gửi dữ liệu lên mạng', correct: false },
            { text: 'Xóa dữ liệu khỏi máy tính', correct: false },
            { text: 'Tải dữ liệu từ mạng về máy tính hoặc thiết bị', correct: true },
            { text: 'In tài liệu', correct: false }
        ]
    },
    {
        question: 'Thuật ngữ "Upload" có nghĩa là gì?',
        answers: [
            { text: 'Tải dữ liệu từ mạng về máy', correct: false },
            { text: 'Sao chép dữ liệu sang USB', correct: false },
            { text: 'Cài đặt phần mềm', correct: false },
            { text: 'Gửi dữ liệu từ máy tính hoặc thiết bị lên mạng', correct: true }
        ]
    },
    {
        question: 'Đâu là một ví dụ về thiết bị lưu trữ di động?',
        answers: [
            { text: 'Ổ cứng trong máy tính (HDD)', correct: false },
            { text: 'USB Flash Drive', correct: true },
            { text: 'Bộ xử lý (CPU)', correct: false },
            { text: 'Màn hình máy tính', correct: false }
        ]
    },
    {
        question: '"Cookie" trong ngữ cảnh trình duyệt web là gì?',
        answers: [
            { text: 'Một loại bánh quy', correct: false },
            { text: 'Một loại virus máy tính', correct: false },
            { text: 'Một tính năng trang trí cho website', correct: false },
            { text: 'Các tệp nhỏ lưu trữ thông tin duyệt web của người dùng', correct: true }
        ]
    },
    {
        question: 'Phần mềm nguồn mở (Open Source Software) là gì?',
        answers: [
            { text: 'Phần mềm rất đắt tiền', correct: false },
            { text: 'Phần mềm chỉ chạy được trên một hệ điều hành nhất định', correct: false },
            { text: 'Phần mềm có mã nguồn công khai, cho phép mọi người xem, sửa đổi và chia sẻ', correct: true },
            { text: 'Phần mềm đã lỗi thời', correct: false }
        ]
    },
    {
        question: 'Đâu là một nguy cơ khi sử dụng mạng Wi-Fi công cộng không bảo mật?',
        answers: [
            { text: 'Tốc độ mạng chậm hơn', correct: false },
            { text: 'Điện thoại nhanh hết pin hơn', correct: false },
            { text: 'Không thể truy cập mạng xã hội', correct: false },
            { text: 'Dữ liệu cá nhân có thể bị đánh cắp', correct: true }
        ]
    },
    {
        question: 'Học trực tuyến (E-learning) liên quan đến việc gì?',
        answers: [
            { text: 'Mua sắm trên mạng', correct: false },
            { text: 'Chơi game đối kháng', correct: false },
            { text: 'Xem phim tại rạp', correct: false },
            { text: 'Học tập thông qua các phương tiện điện tử và Internet', correct: true }
        ]
    },
    {
        question: 'Định dạng tệp .MP3 thường chứa loại dữ liệu nào?',
        answers: [
            { text: 'Văn bản', correct: false },
            { text: 'Hình ảnh', correct: false },
            { text: 'Âm thanh', correct: true },
            { text: 'Video', correct: false }
        ]
    },
    {
        question: 'Thuật ngữ "Livestream" có nghĩa là gì?',
        answers: [
            { text: 'Ghi lại video để xem sau', correct: false },
            { text: 'Chỉnh sửa video đã quay', correct: false },
            { text: 'Tải video lên YouTube', correct: false },
            { text: 'Phát video trực tiếp trên Internet', correct: true }
        ]
    },
    {
        question: 'Đâu là một ví dụ về ứng dụng nhắn tin tức thời?',
        answers: [
            { text: 'Google Maps', correct: false },
            { text: 'WhatsApp / Zalo', correct: true },
            { text: 'Spotify', correct: false },
            { text: 'Gmail', correct: false } // Mặc dù Gmail có chat nhưng WhatsApp/Zalo là ví dụ điển hình hơn
        ]
    },
    {
         question: 'Mục đích chính của việc cập nhật phần mềm là gì?',
         answers: [
             { text: 'Làm chậm máy tính', correct: false },
             { text: 'Thay đổi giao diện người dùng', correct: false },
             { text: 'Vá lỗi bảo mật và cải thiện tính năng', correct: true },
             { text: 'Giảm dung lượng lưu trữ', correct: false }
         ]
     },
     {
         question: 'Trong địa chỉ email "user@example.com", phần nào là tên miền?',
         answers: [
             { text: 'user', correct: false },
             { text: '@', correct: false },
             { text: 'example.com', correct: true },
             { text: '.com', correct: false }
         ]
     },
     {
         question: 'Đâu là một ví dụ về công cụ tìm kiếm trên Internet?',
         answers: [
             { text: 'Google', correct: true },
             { text: 'Facebook', correct: false },
             { text: 'Dropbox', correct: false },
             { text: 'Twitter', correct: false }
         ]
     },
     {
         question: 'Thực tế ảo (VR - Virtual Reality) là công nghệ mô phỏng môi trường nào?',
         answers: [
             { text: 'Môi trường âm thanh nổi', correct: false },
             { text: 'Môi trường mạng xã hội', correct: false },
             { text: 'Môi trường ba chiều do máy tính tạo ra', correct: true },
             { text: 'Môi trường làm việc văn phòng', correct: false }
         ]
     },
     {
         question: 'Thuật ngữ "ISP" là viết tắt của?',
         answers: [
             { text: 'Internal System Program', correct: false },
             { text: 'International Software Protocol', correct: false },
             { text: 'Integrated Security Platform', correct: false },
             { text: 'Internet Service Provider (Nhà cung cấp dịch vụ Internet)', correct: true }
         ]
    },
    {
        question: 'Đâu là một ví dụ về thiết bị xuất (Output device) cho máy tính?',
        answers: [
            { text: 'Webcam', correct: false },
            { text: 'Microphone', correct: false },
            { text: 'Máy in', correct: true },
            { text: 'Bàn phím', correct: false }
        ]
    },
    {
        question: '"Phishing" là hình thức tấn công mạng nhằm mục đích gì?',
        answers: [
            { text: 'Làm hỏng phần cứng máy tính', correct: false },
            { text: 'Tăng tốc độ kết nối mạng', correct: false },
            { text: 'Cài đặt phần mềm diệt virus', correct: false },
            { text: 'Lừa đảo để lấy thông tin nhạy cảm (mật khẩu, thẻ tín dụng)', correct: true }
        ]
    },
    {
        question: 'Hệ thống số nhị phân (Binary System) sử dụng hai chữ số nào?',
        answers: [
            { text: '0 và 1', correct: true },
            { text: '1 và 2', correct: false },
            { text: 'A và B', correct: false },
            { text: '9 và 10', correct: false }
        ]
    },
    {
        question: 'Công nghệ NFC (Near Field Communication) thường dùng để làm gì?',
        answers: [
            { text: 'Kết nối Wi-Fi tầm xa', correct: false },
            { text: 'Định vị GPS', correct: false },
            { text: 'Truyền dữ liệu và thanh toán không tiếp xúc ở khoảng cách rất gần', correct: true },
            { text: 'Xem video chất lượng cao', correct: false }
        ]
    },
    {
        question: 'Phần mềm bảng tính (Spreadsheet) như Excel thường dùng để làm gì?',
        answers: [
            { text: 'Soạn thảo văn bản dài', correct: false },
            { text: 'Thiết kế đồ họa', correct: false },
            { text: 'Tổ chức, phân tích và tính toán dữ liệu dạng bảng', correct: true },
            { text: 'Chỉnh sửa video', correct: false }
        ]
    },
    {
        question: 'Thuật ngữ "Cybersecurity" (An ninh mạng) đề cập đến việc gì?',
        answers: [
            { text: 'Thiết kế website hấp dẫn', correct: false },
            { text: 'Phát triển trò chơi trực tuyến', correct: false },
            { text: 'Quảng cáo sản phẩm trên mạng xã hội', correct: false },
            { text: 'Bảo vệ hệ thống máy tính và mạng khỏi các mối đe dọa kỹ thuật số', correct: true }
        ]
    },
    {
        question: 'Định dạng tệp .ZIP hoặc .RAR dùng để làm gì?',
        answers: [
            { text: 'Nén nhiều tệp thành một tệp nhỏ hơn để dễ lưu trữ và chia sẻ', correct: true },
            { text: 'Lưu trữ video độ phân giải cao', correct: false },
            { text: 'Chạy ứng dụng phần mềm', correct: false },
            { text: 'Lưu trữ cơ sở dữ liệu', correct: false }
        ]
    },
    {
        question: 'Thuật ngữ "Thuật toán" (Algorithm) trong khoa học máy tính là gì?',
        answers: [
            { text: 'Một loại phần cứng máy tính', correct: false },
            { text: 'Một ngôn ngữ lập trình', correct: false },
            { text: 'Một loại virus', correct: false },
            { text: 'Một tập hợp các quy tắc hoặc hướng dẫn để giải quyết một vấn đề hoặc hoàn thành một nhiệm vụ', correct: true }
        ]
    },
    {
        question: 'Điện toán đám mây (Cloud Computing) cho phép người dùng làm gì?',
        answers: [
            { text: 'Chỉ lưu trữ dữ liệu trên máy tính cá nhân', correct: false },
            { text: 'Tăng tốc độ in ấn', correct: false },
            { text: 'Cải thiện chất lượng âm thanh loa', correct: false },
            { text: 'Truy cập tài nguyên máy tính (lưu trữ, phần mềm) qua Internet', correct: true }
        ]
    },
    {
        question: 'Mã hóa (Encryption) dữ liệu nhằm mục đích gì?',
        answers: [
            { text: 'Làm cho dữ liệu dễ đọc hơn', correct: false },
            { text: 'Xóa dữ liệu vĩnh viễn', correct: false },
            { text: 'Tăng kích thước tệp dữ liệu', correct: false },
            { text: 'Chuyển đổi dữ liệu thành một dạng mã để ngăn chặn truy cập trái phép', correct: true }
        ]
    },
    {
        question: 'Podcast là gì?',
        answers: [
            { text: 'Một tệp âm thanh hoặc video kỹ thuật số có thể tải xuống hoặc nghe/xem trực tuyến, thường theo dạng chuỗi', correct: true },
            { text: 'Một chương trình truyền hình trực tiếp', correct: false },
            { text: 'Một loại game di động', correct: false },
            { text: 'Một công cụ chỉnh sửa ảnh', correct: false }
        ]
    },
    {
        question: 'HTML là viết tắt của?',
        answers: [
            { text: 'High Tech Markup Language', correct: false },
            { text: 'Home Tool Management Logic', correct: false },
            { text: 'HyperText Markup Language (Ngôn ngữ đánh dấu siêu văn bản)', correct: true },
            { text: 'Hyperlink Transfer Method Language', correct: false }
        ]
    },
    {
         question: 'Đâu là một ví dụ về thiết bị đeo thông minh (Wearable device)?',
         answers: [
             { text: 'Máy tính để bàn', correct: false },
             { text: 'Máy chiếu', correct: false },
             { text: 'Ổ cứng gắn ngoài', correct: false },
             { text: 'Đồng hồ thông minh (Smartwatch)', correct: true }
         ]
     },
     {
         question: 'Mục đích của việc sử dụng "Giỏ hàng" (Shopping Cart) trên trang web thương mại điện tử là gì?',
         answers: [
             { text: 'Lưu trữ mật khẩu', correct: false },
             { text: 'So sánh giá sản phẩm', correct: false },
             { text: 'Đọc đánh giá sản phẩm', correct: false },
             { text: 'Tạm thời giữ các mặt hàng bạn muốn mua trước khi thanh toán', correct: true }
         ]
     },
     {
         question: 'IoT (Internet of Things) là khái niệm chỉ việc gì?',
         answers: [
             { text: 'Một mạng xã hội mới', correct: false },
             { text: 'Một loại tiền điện tử', correct: false },
             { text: 'Kết nối các thiết bị vật lý hàng ngày với Internet', correct: true },
             { text: 'Một dịch vụ lưu trữ đám mây', correct: false }
         ]
     },
     {
         question: 'Đâu là một phương pháp xác thực hai yếu tố (Two-Factor Authentication)?',
         answers: [
             { text: 'Chỉ sử dụng mật khẩu', correct: false },
             { text: 'Sử dụng tên đăng nhập', correct: false },
             { text: 'Sử dụng mật khẩu và mã gửi đến điện thoại', correct: true },
             { text: 'Sử dụng câu hỏi bí mật', correct: false }
         ]
     },
     {
        question: 'Đâu là một rủi ro của việc chia sẻ quá nhiều thông tin cá nhân trên mạng?',
         answers: [
             { text: 'Nhận được nhiều lời khen', correct: false },
             { text: 'Tài khoản mạng xã hội trở nên phổ biến hơn', correct: false },
             { text: 'Máy tính chạy nhanh hơn', correct: false },
             { text: 'Bị đánh cắp danh tính hoặc lừa đảo', correct: true }
         ]
     },
    {
        question: 'Bookmark (Đánh dấu trang) trong trình duyệt web dùng để làm gì?',
        answers: [
            { text: 'Xóa lịch sử duyệt web', correct: false },
            { text: 'Chặn quảng cáo', correct: false },
            { text: 'Lưu lại địa chỉ các trang web yêu thích để truy cập nhanh', correct: true },
            { text: 'Dịch trang web sang ngôn ngữ khác', correct: false }
        ]
    },
    {
        question: 'Gigabyte (GB) là đơn vị dùng để đo lường gì?',
        answers: [
            { text: 'Dung lượng lưu trữ dữ liệu', correct: true },
            { text: 'Tốc độ xử lý của CPU', correct: false },
            { text: 'Độ phân giải màn hình', correct: false },
            { text: 'Tốc độ kết nối Internet', correct: false }
        ]
    },
    {
        question: 'Thanh địa chỉ (Address Bar) trong trình duyệt web dùng để làm gì?',
        answers: [
            { text: 'Tìm kiếm từ khóa trên trang web hiện tại', correct: false },
            { text: 'Hiển thị các tab đang mở', correct: false },
            { text: 'Điều chỉnh âm lượng video', correct: false },
            { text: 'Nhập địa chỉ (URL) của trang web muốn truy cập', correct: true }
        ]
    },
    {
        question: 'Phần mềm trình chiếu (Presentation Software) như PowerPoint dùng để làm gì?',
        answers: [
            { text: 'Viết mã lập trình', correct: false },
            { text: 'Quản lý email', correct: false },
            { text: 'Nghe nhạc', correct: false },
            { text: 'Tạo các bài thuyết trình với văn bản, hình ảnh, hiệu ứng', correct: true }
        ]
    },
    {
        question: 'Sao chép (Copy) và Dán (Paste) là thao tác dùng để làm gì?',
        answers: [
            { text: 'Xóa tệp tin', correct: false },
            { text: 'Đổi tên tệp tin', correct: false },
            { text: 'Tạo bản sao của văn bản hoặc tệp tin và đặt nó ở vị trí khác', correct: true },
            { text: 'Nén tệp tin', correct: false }
        ]
    },
    {
        question: 'Đâu là một ví dụ về hệ điều hành cho máy tính?',
        answers: [
            { text: 'Windows / macOS / Linux', correct: true },
            { text: 'Microsoft Office', correct: false },
            { text: 'Google Chrome', correct: false },
            { text: 'Adobe Photoshop', correct: false }
        ]
    },
    {
        question: 'Biểu tượng "Thùng rác" (Recycle Bin/Trash) trên máy tính chứa gì?',
        answers: [
            { text: 'Các tệp tin hệ thống quan trọng', correct: false },
            { text: 'Các ứng dụng đã cài đặt', correct: false },
            { text: 'Các tệp tin và thư mục đã bị xóa tạm thời', correct: true },
            { text: 'Các bản sao lưu dữ liệu', correct: false }
        ]
    },
    {
        question: 'Tên miền ".gov" thường được sử dụng bởi tổ chức nào?',
        answers: [
            { text: 'Cơ quan chính phủ', correct: true },
            { text: 'Tổ chức giáo dục', correct: false },
            { text: 'Công ty thương mại', correct: false },
            { text: 'Tổ chức phi lợi nhuận', correct: false }
        ]
    },
    {
        question: 'Tên miền ".edu" thường được sử dụng bởi tổ chức nào?',
        answers: [
            { text: 'Cơ quan chính phủ', correct: false },
            { text: 'Công ty mạng', correct: false },
            { text: 'Tổ chức quân sự', correct: false },
            { text: 'Tổ chức giáo dục (trường học, đại học)', correct: true }
        ]
    },
    {
        question: 'Tên miền ".org" thường được sử dụng bởi tổ chức nào?',
        answers: [
            { text: 'Công ty thương mại', correct: false },
            { text: 'Cá nhân', correct: false },
            { text: 'Các tổ chức (thường là phi lợi nhuận)', correct: true },
            { text: 'Cơ quan chính phủ', correct: false }
        ]
    },
    {
        question: 'Selfie là gì?',
        answers: [
            { text: 'Một bức ảnh phong cảnh', correct: false },
            { text: 'Một video hướng dẫn nấu ăn', correct: false },
            { text: 'Một bức ảnh tự chụp bản thân, thường bằng điện thoại hoặc webcam', correct: true },
            { text: 'Một bài viết trên blog', correct: false }
        ]
    },
    {
        question: 'Hashtag (#) trên mạng xã hội dùng để làm gì?',
        answers: [
            { text: 'Đánh dấu và phân loại nội dung theo chủ đề', correct: true },
            { text: 'Nhắc đến một người dùng khác', correct: false },
            { text: 'Tạo liên kết đến trang web khác', correct: false },
            { text: 'Thể hiện cảm xúc', correct: false }
        ]
    },
    {
        question: 'Emoji là gì?',
        answers: [
            { text: 'Một loại mật khẩu', correct: false },
            { text: 'Một ứng dụng chỉnh sửa ảnh', correct: false },
            { text: 'Các biểu tượng hình ảnh nhỏ dùng để thể hiện cảm xúc hoặc ý tưởng', correct: true },
            { text: 'Một đơn vị tiền tệ kỹ thuật số', correct: false }
        ]
    },
    {
         question: 'Thuật ngữ "Big Data" (Dữ liệu lớn) đề cập đến điều gì?',
         answers: [
             { text: 'Một tệp tin có kích thước rất lớn', correct: false },
             { text: 'Một loại cơ sở dữ liệu quan hệ', correct: false },
             { text: 'Việc sao lưu dữ liệu thường xuyên', correct: false },
             { text: 'Các tập hợp dữ liệu cực lớn và phức tạp, đòi hỏi công cụ xử lý đặc biệt', correct: true }
         ]
    },
    {
        question: 'API (Application Programming Interface) là gì?',
         answers: [
             { text: 'Một ứng dụng di động phổ biến', correct: false },
             { text: 'Một ngôn ngữ lập trình mới', correct: false },
             { text: 'Một loại phần cứng mạng', correct: false },
             { text: 'Một tập hợp các quy tắc và giao thức cho phép các phần mềm khác nhau giao tiếp với nhau', correct: true }
         ]
     },
     {
         question: 'In 3D là quá trình gì?',
         answers: [
             { text: 'Tạo ra vật thể ba chiều từ một mô hình kỹ thuật số bằng cách đắp lớp vật liệu', correct: true },
             { text: 'In tài liệu màu trên giấy', correct: false },
             { text: 'Xem phim 3D tại rạp', correct: false },
             { text: 'Thiết kế logo 3D trên máy tính', correct: false }
         ]
     },
     {
         question: 'Đâu là một lợi ích của việc sử dụng chữ ký số (Digital Signature)?',
         answers: [
             { text: 'Làm cho tài liệu trông đẹp hơn', correct: false },
             { text: 'Tăng tốc độ gửi email', correct: false },
             { text: 'Xác thực nguồn gốc và tính toàn vẹn của tài liệu điện tử', correct: true },
             { text: 'Giảm kích thước tệp tài liệu', correct: false }
         ]
     },
     {
         question: 'Drone (Máy bay không người lái) thường được điều khiển như thế nào?',
         answers: [
             { text: 'Bằng suy nghĩ', correct: false },
             { text: 'Chỉ bay theo lộ trình định sẵn', correct: false },
             { text: 'Bằng giọng nói', correct: false },
             { text: 'Từ xa bằng bộ điều khiển hoặc phần mềm', correct: true }
         ]
     },
     {
        question: 'Thuật ngữ "Clickbait" thường dùng để mô tả điều gì?',
        answers: [
            { text: 'Một liên kết an toàn và đáng tin cậy', correct: false },
            { text: 'Một loại quảng cáo bật lên (pop-up)', correct: false },
            { text: 'Nội dung (thường là tiêu đề) gây tò mò quá mức để thu hút lượt nhấp chuột, nhưng nội dung bên trong thường không đáp ứng kỳ vọng', correct: true },
            { text: 'Một nút bấm để mua hàng trực tuyến', correct: false }
        ]
    },
    {
        question: 'Deepfake là công nghệ sử dụng AI để làm gì?',
        answers: [
            { text: 'Phân tích dữ liệu lớn', correct: false },
            { text: 'Dịch thuật ngôn ngữ tự động', correct: false },
            { text: 'Tự động lái xe ô tô', correct: false },
            { text: 'Tạo ra các video hoặc hình ảnh giả mạo, ghép mặt người này vào người khác một cách thuyết phục', correct: true }
        ]
    },
    {
        question: 'Xác thực sinh trắc học (Biometric Authentication) sử dụng yếu tố nào để nhận dạng?',
        answers: [
            { text: 'Mật khẩu và mã PIN', correct: false },
            { text: 'Thẻ từ và thẻ chip', correct: false },
            { text: 'Câu hỏi bí mật', correct: false },
            { text: 'Các đặc điểm sinh học duy nhất của cá nhân (vân tay, khuôn mặt, mống mắt)', correct: true }
        ]
    },
    {
        question: 'Đâu là một ví dụ về dịch vụ streaming nhạc?',
        answers: [
            { text: 'Netflix', correct: false }, // Streaming phim
            { text: 'Spotify / Apple Music / Zing MP3', correct: true },
            { text: 'Google Drive', correct: false }, // Lưu trữ file
            { text: 'Kindle', correct: false } // Đọc sách điện tử
        ]
    },
    {
        question: 'Đâu là một ví dụ về dịch vụ streaming phim và chương trình TV?',
        answers: [
            { text: 'Spotify', correct: false }, // Streaming nhạc
            { text: 'Netflix / Hulu / HBO Max', correct: true },
            { text: 'Dropbox', correct: false }, // Lưu trữ file
            { text: 'Audible', correct: false } // Sách nói
        ]
    },
    {
        question: 'Thuật ngữ "Bandwidth" (Băng thông) trong mạng máy tính thường đề cập đến điều gì?',
        answers: [
            { text: 'Độ trễ của kết nối mạng', correct: false },
            { text: 'Số lượng thiết bị tối đa có thể kết nối vào mạng', correct: false },
            { text: 'Lượng dữ liệu tối đa có thể truyền qua kết nối mạng trong một khoảng thời gian nhất định', correct: true },
            { text: 'Cường độ tín hiệu Wi-Fi', correct: false }
        ]
    },
    {
        question: 'Độ phân giải màn hình (Screen Resolution) được đo bằng đơn vị nào?',
        answers: [
            { text: 'Gigahertz (GHz)', correct: false },
            { text: 'Pixel (Điểm ảnh)', correct: true },
            { text: 'Megabyte (MB)', correct: false },
            { text: 'Decibel (dB)', correct: false }
        ]
    },
    {
        question: 'VPN (Virtual Private Network) được sử dụng để làm gì?',
        answers: [
            { text: 'Tạo một kết nối mạng riêng ảo, an toàn qua một mạng công cộng (như Internet)', correct: true },
            { text: 'Tăng tốc độ tải tệp', correct: false },
            { text: 'Quản lý mật khẩu', correct: false },
            { text: 'Chặn tất cả quảng cáo', correct: false }
        ]
    },
    {
        question: 'Screenshot (Chụp ảnh màn hình) là thao tác gì?',
        answers: [
            { text: 'Quay video màn hình', correct: false },
            { text: 'In nội dung trên màn hình ra giấy', correct: false },
            { text: 'Chia sẻ màn hình với người khác', correct: false },
            { text: 'Chụp lại hình ảnh đang hiển thị trên màn hình máy tính hoặc điện thoại', correct: true }
        ]
    },
    {
        question: 'Thuật ngữ "Bug" trong phần mềm có nghĩa là gì?',
        answers: [
            { text: 'Một tính năng mới', correct: false },
            { text: 'Một bản cập nhật bảo mật', correct: false },
            { text: 'Một lỗi hoặc khiếm khuyết trong chương trình máy tính', correct: true },
            { text: 'Một tài liệu hướng dẫn', correct: false }
        ]
    },
{
        question: 'Thuật ngữ "Digital Footprint" (Dấu chân kỹ thuật số) là gì?',
        answers: [
            { text: 'Kích thước giày của bạn khi mua online', correct: false },
            { text: 'Một ứng dụng theo dõi sức khỏe', correct: false },
            { text: 'Chữ ký điện tử của bạn', correct: false },
            { text: 'Dấu vết dữ liệu bạn để lại khi hoạt động trực tuyến', correct: true }
        ]
    },
    {
        question: 'Một trình quản lý mật khẩu (Password Manager) giúp bạn làm gì?',
        answers: [
            { text: 'Tạo ra các mật khẩu yếu', correct: false },
            { text: 'Chia sẻ mật khẩu công khai', correct: false },
            { text: 'Lưu trữ và quản lý an toàn nhiều mật khẩu phức tạp', correct: true },
            { text: 'Quên mật khẩu dễ dàng hơn', correct: false }
        ]
    },
    {
        question: 'Đâu là một lợi ích của việc sử dụng phần mềm diệt virus?',
        answers: [
            { text: 'Bảo vệ máy tính khỏi phần mềm độc hại', correct: true },
            { text: 'Làm máy tính nóng hơn', correct: false },
            { text: 'Tăng dung lượng RAM', correct: false },
            { text: 'Cải thiện tốc độ đánh máy', correct: false }
        ]
    },
    {
        question: 'Metadata (Siêu dữ liệu) của một tệp tin ảnh có thể chứa thông tin gì?',
        answers: [
            { text: 'Nội dung văn bản trong ảnh', correct: false },
            { text: 'Ngày chụp, loại máy ảnh, vị trí (nếu có)', correct: true },
            { text: 'Danh sách bạn bè trên mạng xã hội', correct: false },
            { text: 'Lịch sử duyệt web', correct: false }
        ]
    },
    {
        question: 'Giao diện người dùng đồ họa (GUI - Graphical User Interface) cho phép người dùng tương tác với máy tính bằng cách nào?',
        answers: [
            { text: 'Thông qua các yếu tố đồ họa như biểu tượng, cửa sổ, nút bấm', correct: true },
            { text: 'Chỉ bằng các dòng lệnh văn bản', correct: false },
            { text: 'Bằng tín hiệu sóng não', correct: false },
            { text: 'Chỉ bằng giọng nói', correct: false }
        ]
    },
    {
        question: 'Tốc độ làm tươi (Refresh Rate) của màn hình, đo bằng Hertz (Hz), ảnh hưởng đến điều gì?',
        answers: [
            { text: 'Độ sáng của màn hình', correct: false },
            { text: 'Mức tiêu thụ điện năng', correct: false },
            { text: 'Độ mượt của hình ảnh chuyển động', correct: true },
            { text: 'Số lượng màu sắc hiển thị', correct: false }
        ]
    },
    {
        question: 'Đâu là một ví dụ về phần mềm độc hại tống tiền (Ransomware)?',
        answers: [
            { text: 'Phần mềm khóa dữ liệu người dùng và đòi tiền chuộc để mở khóa', correct: true },
            { text: 'Phần mềm hiển thị quảng cáo không mong muốn', correct: false },
            { text: 'Phần mềm theo dõi hoạt động người dùng', correct: false },
            { text: 'Phần mềm giúp tăng tốc máy tính', correct: false }
        ]
    },
    {
        question: 'Công nghệ nhận dạng ký tự quang học (OCR - Optical Character Recognition) dùng để làm gì?',
        answers: [
            { text: 'Nhận dạng khuôn mặt', correct: false },
            { text: 'Nhận dạng giọng nói', correct: false },
            { text: 'Dịch ngôn ngữ', correct: false },
            { text: 'Chuyển đổi hình ảnh văn bản (từ ảnh quét hoặc ảnh chụp) thành văn bản có thể chỉnh sửa được trên máy tính', correct: true }
        ]
    },
    {
        question: 'Thuật ngữ "Dark Web" đề cập đến phần nào của Internet?',
        answers: [
            { text: 'Các trang web có giao diện tối', correct: false },
            { text: 'Các diễn đàn dành cho game thủ', correct: false },
            { text: 'Một phần của Internet không được lập chỉ mục bởi các công cụ tìm kiếm thông thường, cần phần mềm đặc biệt để truy cập và thường liên quan đến các hoạt động ẩn danh hoặc bất hợp pháp', correct: true },
            { text: 'Mạng nội bộ của một công ty', correct: false }
        ]
    },
    {
        question: 'Blockchain là công nghệ nền tảng của loại tài sản kỹ thuật số nào?',
        answers: [
            { text: 'Điểm thưởng khách hàng thân thiết', correct: false },
            { text: 'Cổ phiếu công ty', correct: false },
            { text: 'Tiền điện tử (Cryptocurrency) như Bitcoin', correct: true },
            { text: 'Tài khoản game trực tuyến', correct: false }
        ]
    },
{
        question: 'Công nghệ số là gì?',
        answers: [
            { text: 'Là sự biến đổi và áp dụng các tiến bộ công nghệ để thay đổi cách thức hoạt động từ truyền thống sang mô hình tối ưu hóa kỹ thuật số', correct: true },
            { text: 'Là việc sử dụng máy tính để tính toán', correct: false },
            { text: 'Chỉ là việc sử dụng điện thoại thông minh', correct: false },
            { text: 'Là việc gửi email và lướt web', correct: false }
        ]
    },
    {
        question: 'Chuyển đổi số là quá trình thay đổi ______ và toàn diện của cá nhân, tổ chức dựa trên các công nghệ số.',
        answers: [
            { text: 'Từ từ', correct: false },
            { text: 'Tổng thể', correct: true },
            { text: 'Một phần', correct: false },
            { text: 'Ngẫu nhiên', correct: false }
        ]
    },
    {
        question: 'Đâu KHÔNG phải là một công nghệ số nền tảng cho chuyển đổi số?',
        answers: [
            { text: 'Dữ liệu lớn (Big Data)', correct: false },
            { text: 'Internet vạn vật (IoT)', correct: false },
            { text: 'Điện toán đám mây (Cloud Computing)', correct: false },
            { text: 'Máy đánh chữ', correct: true }
        ]
    },
    {
        question: 'Mục tiêu chính của chuyển đổi số là gì?',
        answers: [
            { text: 'Tăng số lượng nhân viên', correct: false },
            { text: 'Quay trở lại phương thức làm việc truyền thống', correct: false },
            { text: 'Nâng cao hiệu quả hoạt động, tăng khả năng cạnh tranh và tạo ra giá trị mới', correct: true },
            { text: 'Giảm tương tác với khách hàng', correct: false }
        ]
    },
    {
        question: 'Chuyển đổi số diễn ra ở những lĩnh vực nào trong đời sống và kinh tế?',
        answers: [
            { text: 'Chỉ trong lĩnh vực công nghệ thông tin', correct: false },
            { text: 'Chỉ trong các doanh nghiệp lớn', correct: false },
            { text: 'Hầu hết các lĩnh vực', correct: true },
            { text: 'Chỉ trong các cơ quan nhà nước', correct: false }
        ]
    },
    {
        question: 'Bản chất của chuyển đổi số là gì?',
        answers: [
            { text: 'Chỉ đơn thuần là mua sắm công nghệ mới', correct: false },
            { text: 'Chỉ tập trung vào việc tự động hóa', correct: false },
            { text: 'Là việc sử dụng mạng xã hội', correct: false },
            { text: 'Là quá trình tái cơ cấu toàn diện về cách thức tổ chức hoạt động và tư duy', correct: true }
        ]
    },
    {
        question: 'Yếu tố quan trọng để chuyển đổi số thành công là gì?',
        answers: [
            { text: 'Có ngân sách thật lớn', correct: false },
            { text: 'Sao chép mô hình của người khác', correct: false },
            { text: 'Chỉ cần có phần mềm hiện đại', correct: false },
            { text: 'Sự cam kết từ tầng lãnh đạo và sự hỗ trợ từ toàn bộ tổ chức', correct: true }
        ]
    },
    {
        question: 'Công nghệ số giúp kết nối vạn vật thông qua internet được gọi là gì?',
        answers: [
            { text: 'Big Data', correct: false },
            { text: 'AI', correct: false },
            { text: 'IoT (Internet of Things)', correct: true },
            { text: 'Blockchain', correct: false }
        ]
    },
    {
        question: 'Việc phân tích và xử lý các tập dữ liệu cực lớn và phức tạp được gọi là gì?',
        answers: [
            { text: 'Dữ liệu lớn (Big Data)', correct: true },
            { text: 'Điện toán đám mây', correct: false },
            { text: 'Trí tuệ nhân tạo (AI)', correct: false },
            { text: 'Thực tế ảo (VR)', correct: false }
        ]
    },
    {
        question: 'Lưu trữ và truy cập dữ liệu, ứng dụng qua internet thay vì trên máy chủ vật lý gọi là gì?',
        answers: [
            { text: 'Mạng xã hội', correct: false },
            { text: 'Thương mại điện tử', correct: false },
            { text: 'Điện toán đám mây (Cloud Computing)', correct: true },
            { text: 'Chữ ký số', correct: false }
        ]
    },
    {
        question: 'Công nghệ mô phỏng quá trình tư duy và học hỏi của con người bằng máy móc được gọi là gì?',
        answers: [
            { text: 'IoT', correct: false },
            { text: 'Big Data', correct: false },
            { text: 'Trí tuệ nhân tạo (AI)', correct: true },
            { text: 'Công nghệ sinh học', correct: false }
        ]
    },
    {
        question: 'Công nghệ chuỗi khối, giúp giao dịch an toàn và minh bạch, được gọi là gì?',
        answers: [
            { text: 'Điện toán đám mây', correct: false },
            { text: 'IoT', correct: false },
            { text: 'Blockchain', correct: true },
            { text: 'Big Data', correct: false }
        ]
    },
    {
        question: 'Chuyển đổi số trong một doanh nghiệp có thể giúp:',
        answers: [
            { text: 'Giảm tương tác với khách hàng', correct: false },
            { text: 'Tăng chi phí hoạt động', correct: false },
            { text: 'Tối ưu hóa quy trình làm việc và tăng cường hiệu suất', correct: true },
            { text: 'Chỉ phục vụ cho mục đích quảng cáo', correct: false }
        ]
    },
    {
        question: 'Công dân số là gì?',
        answers: [
            { text: 'Người chỉ sử dụng điện thoại', correct: false },
            { text: 'Người sống hoàn toàn không sử dụng công nghệ', correct: false },
            { text: 'Công dân có khả năng sử dụng công nghệ số để tham gia vào đời sống kinh tế, xã hội', correct: true },
            { text: 'Người chỉ làm việc trong ngành công nghệ thông tin', correct: false }
        ]
    },
    {
        question: 'Chính phủ số là gì?',
        answers: [
            { text: 'Là chính phủ chỉ sử dụng máy tính', correct: false },
            { text: 'Là chính phủ hoạt động hiệu quả, minh bạch dựa trên nền tảng công nghệ số', correct: true },
            { text: 'Là chính phủ không tương tác với người dân qua mạng', correct: false },
            { text: 'Là chính phủ chỉ cung cấp dịch vụ trực tiếp', correct: false }
        ]
    },
    {
        question: 'Kinh tế số là gì?',
        answers: [
            { text: 'Là nền kinh tế chỉ dựa vào tiền mặt', correct: false },
            { text: 'Là nền kinh tế mà hoạt động sản xuất, kinh doanh dựa chủ yếu vào công nghệ số', correct: true },
            { text: 'Là nền kinh tế không có sự cạnh tranh', correct: false },
            { text: 'Là nền kinh tế chỉ có các cửa hàng truyền thống', correct: false }
        ]
    },
    {
        question: 'Đâu là ví dụ về chuyển đổi số trong giáo dục?',
        answers: [
            { text: 'Chỉ sử dụng sách giáo khoa truyền thống', correct: false },
            { text: 'Xây dựng các lớp học trực tuyến, nền tảng học tập số', correct: true },
            { text: 'Giảm số lượng giáo viên', correct: false },
            { text: 'Không cho học sinh sử dụng máy tính', correct: false }
        ]
    },
    {
        question: 'Đâu là ví dụ về chuyển đổi số trong y tế?',
        answers: [
            { text: 'Chỉ khám chữa bệnh tại bệnh viện', correct: false },
            { text: 'Áp dụng hồ sơ bệnh án điện tử, khám chữa bệnh từ xa', correct: true },
            { text: 'Giảm số lượng bác sĩ', correct: false },
            { text: 'Không sử dụng thiết bị y tế hiện đại', correct: false }
        ]
    },
    {
        question: 'Đâu là ví dụ về chuyển đổi số trong du lịch?',
        answers: [
            { text: 'Chỉ bán vé trực tiếp tại quầy', correct: false },
            { text: 'Phát triển ứng dụng đặt tour, đặt phòng trực tuyến, trải nghiệm thực tế ảo', correct: true },
            { text: 'Giảm số lượng khách du lịch', correct: false },
            { text: 'Không quảng bá du lịch trên mạng', correct: false }
        ]
    },
    {
        question: 'Lợi ích của chuyển đổi số đối với người dân là gì?',
        answers: [
            { text: 'Phải đi lại nhiều hơn để làm thủ tục', correct: false },
            { text: 'Tiếp cận dịch vụ công nhanh chóng, tiện lợi, minh bạch hơn', correct: true },
            { text: 'Tốn kém nhiều chi phí hơn', correct: false },
            { text: 'Bị hạn chế thông tin', correct: false }
        ]
    },
    {
        question: 'Chuyển đổi số giúp doanh nghiệp nhỏ và vừa như thế nào?',
        answers: [
            { text: 'Khó khăn hơn trong việc tiếp cận khách hàng', correct: false },
            { text: 'Giúp tối ưu hóa quy trình, giảm chi phí và mở rộng thị trường', correct: true },
            { text: 'Phải đóng cửa do cạnh tranh công nghệ', correct: false },
            { text: 'Không có lợi ích gì', correct: false }
        ]
    },
    {
        question: 'Thành phần cốt lõi của chuyển đổi số bao gồm: Công nghệ, ______ và Tổ chức/Quy trình.',
        answers: [
            { text: 'Con người', correct: true },
            { text: 'Tiền bạc', correct: false },
            { text: 'Máy móc', correct: false },
            { text: 'Văn phòng', correct: false }
        ]
    },
    {
        question: 'Khi nói về chuyển đổi số, yếu tố "Con người" đề cập đến điều gì?',
        answers: [
            { text: 'Chỉ số lượng nhân viên', correct: false },
            { text: 'Sự thay đổi về tư duy, kỹ năng và văn hóa làm việc của con người', correct: true },
            { text: 'Việc thay thế con người bằng máy móc', correct: false },
            { text: 'Giảm vai trò của con người', correct: false }
        ]
    },
    {
        question: 'Yếu tố "Tổ chức/Quy trình" trong chuyển đổi số đề cập đến điều gì?',
        answers: [
            { text: 'Chỉ cấu trúc bộ máy tổ chức', correct: false },
            { text: 'Việc tái thiết kế các quy trình làm việc để phù hợp với môi trường số', correct: true },
            { text: 'Giữ nguyên quy trình làm việc cũ', correct: false },
            { text: 'Tăng thêm các bước thủ tục', correct: false }
        ]
    },
    {
        question: 'Một trong những thách thức khi thực hiện chuyển đổi số là gì?',
        answers: [
            { text: 'Quá dễ dàng để thực hiện', correct: false },
            { text: 'Sự thiếu sẵn sàng về kỹ năng số và tâm lý ngại thay đổi', correct: true },
            { text: 'Chi phí ban đầu quá thấp', correct: false },
            { text: 'Có quá nhiều chuyên gia hỗ trợ', correct: false }
        ]
    },
    {
        question: 'Lợi ích lớn nhất của mua sắm trực tuyến là gì?',
        answers: [
            { text: 'Phải di chuyển đến cửa hàng', correct: false },
            { text: 'Tiết kiệm thời gian, linh hoạt về thời gian và địa điểm mua sắm', correct: true },
            { text: 'Bị giới hạn lựa chọn sản phẩm', correct: false },
            { text: 'Khó so sánh giá cả', correct: false }
        ]
    },
    {
        question: 'Khi mua sắm trực tuyến, bạn có thể dễ dàng so sánh điều gì giữa các cửa hàng khác nhau?',
        answers: [
            { text: 'Chỉ hình ảnh sản phẩm', correct: false },
            { text: 'Số lượng nhân viên bán hàng', correct: false },
            { text: 'Diện tích cửa hàng', correct: false },
            { text: 'Giá cả và chất lượng sản phẩm thông qua đánh giá của người mua trước', correct: true }
        ]
    },
    {
        question: 'Hình thức thanh toán nào KHÔNG phải là thanh toán không dùng tiền mặt?',
        answers: [
            { text: 'Chuyển khoản ngân hàng', correct: false },
            { text: 'Thanh toán bằng ví điện tử', correct: false },
            { text: 'Thanh toán bằng tiền mặt', correct: true },
            { text: 'Thanh toán bằng thẻ tín dụng/ghi nợ', correct: false }
        ]
    },
    {
        question: 'Lợi ích của thanh toán không dùng tiền mặt đối với người dân là gì?',
        answers: [
            { text: 'Tiện lợi, an toàn, nhanh chóng và dễ dàng quản lý chi tiêu', correct: true },
            { text: 'Mất nhiều thời gian hơn', correct: false },
            { text: 'Khó kiểm soát số dư tài khoản', correct: false },
            { text: 'Phải mang theo nhiều tiền mặt', correct: false }
        ]
    },
    {
        question: 'Lợi ích của thanh toán không dùng tiền mặt đối với nền kinh tế là gì?',
        answers: [
            { text: 'Tăng chi phí in ấn tiền', correct: false },
            { text: 'Khó thu hút vốn đầu tư', correct: false },
            { text: 'Hạn chế lạm phát, tăng cường hiệu quả phòng chống tham nhũng', correct: true },
            { text: 'Giảm sự minh bạch trong giao dịch', correct: false }
        ]
    },
    {
        question: 'Học trực tuyến mang lại lợi ích gì về thời gian và địa điểm?',
        answers: [
            { text: 'Linh hoạt về thời gian và địa điểm học tập', correct: true },
            { text: 'Chỉ học được vào giờ cố định tại trường', correct: false },
            { text: 'Phải đến trung tâm học', correct: false },
            { text: 'Bị giới hạn địa lý', correct: false }
        ]
    },
    {
        question: 'Học trực tuyến giúp tiết kiệm chi phí nào?',
        answers: [
            { text: 'Chi phí đăng ký học', correct: false },
            { text: 'Chi phí mua sách', correct: false },
            { text: 'Chi phí thuê gia sư', correct: false },
            { text: 'Chi phí đi lại, ăn ở (đối với học viên ở xa)', correct: true }
        ]
    },
    {
        question: 'Khi học trực tuyến, người học có thể tiếp cận nguồn tài liệu như thế nào?',
        answers: [
            { text: 'Phong phú và đa dạng từ nhiều nguồn khác nhau trên internet', correct: true },
            { text: 'Hạn chế tài liệu', correct: false },
            { text: 'Chỉ tài liệu do giáo viên cung cấp', correct: false },
            { text: 'Không có tài liệu tham khảo', correct: false }
        ]
    },
    {
        question: 'Học trực tuyến có thể giúp rèn luyện kỹ năng gì?',
        answers: [
            { text: 'Kỹ năng ghi chép truyền thống', correct: false },
            { text: 'Kỹ năng sử dụng bảng đen', correct: false },
            { text: 'Kỹ năng đọc sách giấy', correct: false },
            { text: 'Kỹ năng làm việc nhóm và giao tiếp số', correct: true }
        ]
    },
    {
        question: 'Việc sử dụng công nghệ số trong giao thông (ví dụ: bản đồ số, ứng dụng gọi xe) mang lại lợi ích gì?',
        answers: [
            { text: 'Tắc nghẽn giao thông hơn', correct: false },
            { text: 'Khó tìm đường', correct: false },
            { text: 'Di chuyển thuận tiện, tiết kiệm thời gian và chi phí', correct: true },
            { text: 'Tăng chi phí di chuyển', correct: false }
        ]
    },
    {
        question: 'Ứng dụng công nghệ số trong y tế giúp người dân như thế nào?',
        answers: [
            { text: 'Khó tiếp cận dịch vụ y tế', correct: false },
            { text: 'Phải chờ đợi lâu hơn', correct: false },
            { text: 'Dễ dàng đặt lịch khám, tư vấn sức khỏe từ xa', correct: true },
            { text: 'Chỉ khám được ở bệnh viện lớn', correct: false }
        ]
    },
    {
        question: 'Công nghệ số giúp hoạt động giải trí của con người trở nên đa dạng hơn như thế nào?',
        answers: [
            { text: 'Tiếp cận phim ảnh, âm nhạc, trò chơi trực tuyến dễ dàng', correct: true },
            { text: 'Chỉ có thể xem TV', correct: false },
            { text: 'Giới hạn các loại hình giải trí', correct: false },
            { text: 'Phải mua đĩa CD/DVD', correct: false }
        ]
    },
    {
        question: 'Việc đọc sách báo trên thiết bị điện tử thay vì sách báo giấy mang lại lợi ích gì?',
        answers: [
            { text: 'Tốn kém nhiều không gian lưu trữ', correct: false },
            { text: 'Chất lượng hình ảnh kém', correct: false },
            { text: 'Thuận tiện mang theo, dễ dàng tìm kiếm thông tin', correct: true },
            { text: 'Khó chia sẻ thông tin', correct: false }
        ]
    },
    {
        question: 'Công nghệ số giúp kết nối và giao tiếp giữa mọi người như thế nào?',
        answers: [
            { text: 'Nhanh chóng, dễ dàng qua mạng xã hội, ứng dụng nhắn tin, gọi video', correct: true },
            { text: 'Khó khăn hơn trong việc liên lạc', correct: false },
            { text: 'Chỉ liên lạc được ở khoảng cách gần', correct: false },
            { text: 'Tốn nhiều chi phí liên lạc', correct: false }
        ]
    },
    {
        question: 'Công nghệ số góp phần vào việc bảo vệ môi trường như thế nào?',
        answers: [
            { text: 'Tăng lượng rác thải điện tử', correct: false },
            { text: 'Tiêu thụ nhiều năng lượng hơn', correct: false },
            { text: 'Gây ô nhiễm không khí', correct: false },
            { text: 'Giảm sử dụng giấy tờ, hạn chế di chuyển, tiết kiệm năng lượng', correct: true }
        ]
    },
    {
        question: 'Việc làm việc từ xa (remote work) được hỗ trợ bởi công nghệ số mang lại lợi ích gì cho người lao động?',
        answers: [
            { text: 'Giảm sự linh hoạt', correct: false },
            { text: 'Khó cân bằng cuộc sống và công việc', correct: false },
            { text: 'Bị cô lập', correct: false },
            { text: 'Linh hoạt thời gian, địa điểm làm việc, tiết kiệm chi phí đi lại', correct: true }
        ]
    },
    {
        question: 'Công nghệ số giúp người khuyết tật hòa nhập cộng đồng tốt hơn như thế nào?',
        answers: [
            { text: 'Cung cấp các công cụ hỗ trợ tiếp cận thông tin, giao tiếp', correct: true },
            { text: 'Tạo ra rào cản', correct: false },
            { text: 'Giảm cơ hội việc làm', correct: false },
            { text: 'Khó tham gia các hoạt động xã hội', correct: false }
        ]
    },
    {
        question: 'Việc sử dụng bản đồ số (ví dụ: Google Maps) có lợi ích gì khi di chuyển?',
        answers: [
            { text: 'Dễ bị lạc đường', correct: false },
            { text: 'Chỉ dẫn sai đường', correct: false },
            { text: 'Tiêu tốn nhiều dữ liệu di động', correct: false },
            { text: 'Tìm đường nhanh chóng, chính xác, cập nhật tình hình giao thông', correct: true }
        ]
    },
    {
        question: 'Công nghệ số giúp việc học ngoại ngữ trở nên dễ dàng hơn như thế nào?',
        answers: [
            { text: 'Tiếp cận các ứng dụng, nền tảng học trực tuyến, tài liệu đa phương tiện phong phú', correct: true },
            { text: 'Khó tìm tài liệu học', correct: false },
            { text: 'Chỉ học được qua sách giấy', correct: false },
            { text: 'Cần có giáo viên trực tiếp', correct: false }
        ]
    },
    {
        question: 'Việc sử dụng ví điện tử để thanh toán giúp bạn làm gì?',
        answers: [
            { text: 'Phải mang theo nhiều tiền mặt', correct: false },
            { text: 'Khó theo dõi lịch sử giao dịch', correct: false },
            { text: 'Thanh toán nhanh chóng, tiện lợi chỉ với thiết bị di động', correct: true },
            { text: 'Chỉ dùng được ở một vài nơi', correct: false }
        ]
    },
    {
        question: 'Cổng Dịch vụ công Quốc gia là gì?',
        answers: [
            { text: 'Là trang web để chơi game', correct: false },
            { text: 'Là trang web chỉ để đọc tin tức', correct: false },
            { text: 'Là nơi mua sắm trực tuyến', correct: false },
            { text: 'Là nền tảng trực tuyến cung cấp các dịch vụ công của cơ quan nhà nước cho người dân và doanh nghiệp', correct: true }
        ]
    },
    {
        question: 'Sử dụng Cổng Dịch vụ công Quốc gia mang lại lợi ích gì cho người dân và doanh nghiệp?',
        answers: [
            { text: 'Tiết kiệm thời gian, chi phí đi lại, thực hiện thủ tục hành chính nhanh chóng, minh bạch', correct: true },
            { text: 'Mất nhiều thời gian và công sức hơn', correct: false },
            { text: 'Thủ tục phức tạp hơn', correct: false },
            { text: 'Chỉ giải quyết được một vài thủ tục đơn giản', correct: false }
        ]
    },
    {
        question: 'VNeID là ứng dụng gì?',
        answers: [
            { text: 'Ứng dụng đặt đồ ăn', correct: false },
            { text: 'Ứng dụng nghe nhạc', correct: false },
            { text: 'Ứng dụng chỉnh sửa ảnh', correct: false },
            { text: 'Ứng dụng định danh điện tử do Bộ Công an phát triển', correct: true }
        ]
    },
    {
        question: 'VNeID giúp người dân thay thế các loại giấy tờ vật lý nào?',
        answers: [
            { text: 'Căn cước công dân, giấy phép lái xe, thẻ bảo hiểm y tế... (tích hợp thông tin)', correct: true },
            { text: 'Chỉ thẻ ngân hàng', correct: false },
            { text: 'Chỉ giấy khai sinh', correct: false },
            { text: 'Chỉ hộ chiếu', correct: false }
        ]
    },
    {
        question: 'Sử dụng VNeID mang lại lợi ích gì?',
        answers: [
            { text: 'Phải mang theo nhiều giấy tờ hơn', correct: false },
            { text: 'Khó xác minh danh tính', correct: false },
            { text: 'Chỉ sử dụng được ở một số địa điểm', correct: false },
            { text: 'Thuận tiện khi thực hiện các thủ tục hành chính, giao dịch, giảm rủi ro mất mát giấy tờ', correct: true }
        ]
    },
    {
        question: 'Dịch vụ công trực tuyến về bảo hiểm xã hội giúp người dân làm gì?',
        answers: [
            { text: 'Chỉ nộp hồ sơ giấy trực tiếp', correct: false },
            { text: 'Khó tra cứu thông tin', correct: false },
            { text: 'Chỉ xem được thông tin cơ bản', correct: false },
            { text: 'Tra cứu thông tin đóng BHXH, BHYT, quá trình tham gia, chế độ được hưởng, nộp tiền trực tuyến', correct: true }
        ]
    },
    {
        question: 'Ứng dụng VssID của Bảo hiểm xã hội Việt Nam cung cấp những thông tin gì?',
        answers: [
            { text: 'Chỉ thông tin về y tế', correct: false },
            { text: 'Chỉ thông tin về lương', correct: false },
            { text: 'Thông tin về thời tiết', correct: false },
            { text: 'Thông tin về quá trình tham gia BHXH, BHYT, BHTN, lịch sử khám chữa bệnh BHYT', correct: true }
        ]
    },
    {
        question: 'Dịch vụ công trực tuyến trong lĩnh vực y tế giúp người dân làm gì?',
        answers: [
            { text: 'Chỉ đặt lịch khám trực tiếp', correct: false },
            { text: 'Khó tiếp cận bác sĩ', correct: false },
            { text: 'Đặt lịch khám online, tra cứu thông tin y tế, tư vấn sức khỏe từ xa', correct: true },
            { text: 'Chỉ dùng để xem thông tin bệnh viện', correct: false }
        ]
    },
    {
        question: 'Việc nộp thuế trực tuyến mang lại lợi ích gì cho doanh nghiệp và cá nhân?',
        answers: [
            { text: 'Tốn kém nhiều thời gian', correct: false },
            { text: 'Thủ tục phức tạp hơn', correct: false },
            { text: 'Nhanh chóng, chính xác, tiết kiệm thời gian và chi phí đi lại', correct: true },
            { text: 'Chỉ nộp được ở một vài chi cục thuế', correct: false }
        ]
    },
    {
        question: 'Dịch vụ công trực tuyến về đăng ký kinh doanh giúp doanh nghiệp làm gì?',
        answers: [
            { text: 'Phải đến trực tiếp cơ quan đăng ký', correct: false },
            { text: 'Mất nhiều thời gian chờ đợi', correct: false },
            { text: 'Đăng ký thành lập, thay đổi thông tin doanh nghiệp trực tuyến', correct: true },
            { text: 'Chỉ áp dụng cho doanh nghiệp lớn', correct: false }
        ]
    },
    {
        question: 'Việc cấp phiếu lý lịch tư pháp trực tuyến là một ví dụ về dịch vụ công trực tuyến ở mức độ nào?',
        answers: [
            { text: 'Mức độ 1 (Cung cấp thông tin)', correct: false },
            { text: 'Mức độ 2 (Tải mẫu đơn)', correct: false },
            { text: 'Mức độ 3 (Nộp và tiếp nhận hồ sơ trực tuyến)', correct: false },
            { text: 'Mức độ 4 (Thanh toán trực tuyến và nhận kết quả trực tuyến)', correct: true }
        ]
    },
    {
        question: 'Lợi ích của việc sử dụng dịch vụ công trực tuyến mức độ cao (3, 4) là gì?',
        answers: [
            { text: 'Có thể hoàn thành thủ tục mọi lúc, mọi nơi, giảm thiểu việc đi lại', correct: true },
            { text: 'Vẫn phải đến cơ quan nhà nước nhiều lần', correct: false },
            { text: 'Thủ tục rườm rà hơn', correct: false },
            { text: 'Chỉ áp dụng cho một số đối tượng', correct: false }
        ]
    },
    {
        question: 'Cổng Dịch vụ công Quốc gia được quản lý bởi cơ quan nào?',
        answers: [
            { text: 'Văn phòng Chính phủ', correct: true },
            { text: 'Bộ Y tế', correct: false },
            { text: 'Bộ Giáo dục và Đào tạo', correct: false },
            { text: 'Bộ Công Thương', correct: false }
        ]
    },
    {
        question: 'Khi sử dụng dịch vụ công trực tuyến, bạn cần đảm bảo điều gì về thông tin cá nhân?',
        answers: [
            { text: 'Có thể chia sẻ thoải mái', correct: false },
            { text: 'Không cần quan tâm đến bảo mật', correct: false },
            { text: 'Cung cấp thông tin sai lệch', correct: false },
            { text: 'Bảo mật thông tin cá nhân và tài khoản', correct: true }
        ]
    },
    {
        question: 'Dịch vụ công trực tuyến giúp tăng cường tính ______ trong giải quyết thủ tục hành chính.',
        answers: [
            { text: 'Minh bạch', correct: true },
            { text: 'Phức tạp', correct: false },
            { text: 'Chậm chạp', correct: false },
            { text: 'Tùy tiện', correct: false }
        ]
    },
    {
        question: 'Việc tích hợp các dịch vụ công lên Cổng Dịch vụ công Quốc gia nhằm mục đích gì?',
        answers: [
            { text: 'Tạo sự thuận tiện, tập trung cho người dân và doanh nghiệp khi thực hiện các thủ tục', correct: true },
            { text: 'Làm cho thủ tục phức tạp hơn', correct: false },
            { text: 'Giảm số lượng dịch vụ công', correct: false },
            { text: 'Chỉ phục vụ cho một vài ngành', correct: false }
        ]
    },
    {
        question: 'VNeID sử dụng công nghệ gì để xác thực danh tính người dùng?',
        answers: [
            { text: 'Nhận diện giọng nói', correct: false },
            { text: 'Nhận diện chữ viết', correct: false },
            { text: 'Chỉ dùng mật khẩu', correct: false },
            { text: 'Sinh trắc học (vân tay, khuôn mặt) và mã QR', correct: true }
        ]
    },
    {
        question: 'Tra cứu mã số BHXH và thông tin thẻ BHYT có thể thực hiện ở đâu?',
        answers: [
            { text: 'Chỉ tại cơ quan BHXH', correct: false },
            { text: 'Chỉ qua điện thoại', correct: false },
            { text: 'Trên các trang web không chính thức', correct: false },
            { text: 'Trên Cổng Dịch vụ công BHXH Việt Nam hoặc ứng dụng VssID', correct: true },
        ]
    },
    {
        question: 'Đăng ký khai sinh trực tuyến là một ví dụ về dịch vụ công trực tuyến trong lĩnh vực nào?',
        answers: [
            { text: 'Tư pháp', correct: true },
            { text: 'Giáo dục', correct: false },
            { text: 'Y tế', correct: false },
            { text: 'Giao thông', correct: false }
        ]
    },
    {
        question: 'Việc xin cấp giấy phép xây dựng trực tuyến giúp giảm bớt thủ tục nào?',
        answers: [
            { text: 'Thủ tục nộp thuế', correct: false },
            { text: 'Thủ tục mua vật liệu xây dựng', correct: false },
            { text: 'Thủ tục thuê nhân công', correct: false },
            { text: 'Thủ tục nộp hồ sơ giấy và chờ đợi tại cơ quan nhà nước', correct: true }
        ]
    },
    {
        question: 'Lừa đảo trực tuyến là gì?',
        answers: [
            { text: 'Là việc mua sắm trên mạng', correct: false },
            { text: 'Là việc đọc báo online', correct: false },
            { text: 'Là việc chơi game online', correct: false },
            { text: 'Là hành vi gian lận trên không gian mạng nhằm chiếm đoạt thông tin hoặc tài sản', correct: true },
        ]
    },
    {
        question: 'Làm thế nào để nhận biết một email lừa đảo (phishing email)?',
        answers: [
            { text: 'Email có nội dung rất chuyên nghiệp', correct: false },
            { text: 'Email từ ngân hàng của bạn', correct: false },
            { text: 'Email quảng cáo sản phẩm', correct: false },
            { text: 'Email yêu cầu cung cấp thông tin cá nhân nhạy cảm (mật khẩu, số thẻ tín dụng), có lỗi chính tả hoặc đường link lạ', correct: true }
        ]
    },
    {
        question: 'Khi nhận được tin nhắn/cuộc gọi từ số lạ yêu cầu chuyển tiền gấp, bạn nên làm gì?',
        answers: [
            { text: 'Ngay lập tức chuyển tiền theo yêu cầu', correct: false },
            { text: 'Cung cấp mã OTP ngay lập tức', correct: false },
            { text: 'Chia sẻ thông tin với bạn bè trên mạng xã hội', correct: false },
            { text: 'Giữ bình tĩnh, xác minh thông tin bằng cách gọi lại cho người thân hoặc cơ quan liên quan qua số điện thoại chính thức', correct: true }
        ]
    },
    {
        question: 'Đâu là dấu hiệu của một trang web giả mạo?',
        answers: [
            { text: 'Tên miền quen thuộc', correct: false },
            { text: 'Có chứng chỉ bảo mật SSL (biểu tượng ổ khóa xanh)', correct: false },
            { text: 'Cung cấp thông tin đầy đủ', correct: false },
            { text: 'Tên miền có lỗi chính tả, giao diện sơ sài, không có thông tin liên hệ rõ ràng', correct: true }
        ]
    },
    {
        question: 'Bạn nên làm gì với mật khẩu của mình?',
        answers: [
            { text: 'Sử dụng một mật khẩu cho tất cả các tài khoản', correct: false },
            { text: 'Ghi mật khẩu ra giấy và dán ở màn hình máy tính', correct: false },
            { text: 'Sử dụng mật khẩu đơn giản để dễ nhớ', correct: false },
            { text: 'Thay đổi mật khẩu định kỳ và không chia sẻ cho bất kỳ ai', correct: true }
        ]
    },
    {
        question: 'Xác thực hai yếu tố (2FA) là gì?',
        answers: [
            { text: 'Chỉ đăng nhập bằng mật khẩu', correct: false },
            { text: 'Chỉ cần nhập tên đăng nhập', correct: false },
            { text: 'Sử dụng chung tài khoản với người khác', correct: false },
            { text: 'Yêu cầu hai hình thức xác minh danh tính khi đăng nhập (ví dụ: mật khẩu và mã OTP gửi đến điện thoại)', correct: true }
        ]
    },
    {
        question: 'Lợi ích của việc sử dụng xác thực hai yếu tố (2FA) là gì?',
        answers: [
            { text: 'Giảm bảo mật tài khoản', correct: false },
            { text: 'Gây khó khăn khi đăng nhập', correct: false },
            { text: 'Không có tác dụng gì', correct: false },
            { text: 'Tăng cường đáng kể tính bảo mật cho tài khoản của bạn', correct: true }
        ]
    },
    {
        question: 'Bạn nên cẩn trọng khi tải xuống tệp đính kèm từ đâu?',
        answers: [
            { text: 'Email từ người quen', correct: false },
            { text: 'Email từ đồng nghiệp', correct: false },
            { text: 'Email hoặc tin nhắn từ người lạ, không rõ nguồn gốc', correct: true },
            { text: 'Email từ sếp', correct: false }
        ]
    },
    {
        question: 'Phần mềm độc hại (malware) là gì?',
        answers: [
            { text: 'Là phần mềm diệt virus', correct: false },
            { text: 'Là trò chơi giải trí', correct: false },
            { text: 'Là ứng dụng văn phòng', correct: false },
            { text: 'Là phần mềm được thiết kế để gây hại cho máy tính hoặc đánh cắp thông tin', correct: true }
        ]
    },
    {
        question: 'Làm thế nào để bảo vệ máy tính khỏi phần mềm độc hại?',
        answers: [
            { text: 'Tắt phần mềm diệt virus', correct: false },
            { text: 'Tải phần mềm từ các nguồn không tin cậy', correct: false },
            { text: 'Mở tất cả các email đính kèm', correct: false },
            { text: 'Cài đặt phần mềm diệt virus uy tín và cập nhật thường xuyên, cẩn trọng khi tải tệp từ internet', correct: true }
        ]
    },
    {
        question: 'Bạn nên làm gì khi sử dụng mạng Wi-Fi công cộng?',
        answers: [
            { text: 'Thoải mái truy cập các trang web nhạy cảm', correct: false },
            { text: 'Chia sẻ mật khẩu Wi-Fi với người lạ', correct: false },
            { text: 'Tải xuống nhiều tệp', correct: false },
            { text: 'Hạn chế truy cập thông tin cá nhân, giao dịch ngân hàng và sử dụng VPN nếu có thể', correct: true }
        ]
    },
    {
        question: 'Tấn công phishing nhằm mục đích gì?',
        answers: [
            { text: 'Chia sẻ kiến thức hữu ích', correct: false },
            { text: 'Lừa đảo để lấy cắp thông tin cá nhân, tài khoản, mật khẩu', correct: true },
            { text: 'Cung cấp dịch vụ miễn phí', correct: false },
            { text: 'Giới thiệu sản phẩm mới', correct: false }
        ]
    },
    {
        question: 'Khi nhận được yêu cầu cung cấp thông tin cá nhân qua điện thoại, bạn nên làm gì?',
        answers: [
            { text: 'Không cung cấp thông tin và xác minh lại với tổ chức/cá nhân liên quan qua kênh liên lạc chính thức', correct: true },
            { text: 'Cung cấp ngay thông tin được yêu cầu', correct: false },
            { text: 'Chia sẻ thông tin với bất kỳ ai hỏi', correct: false },
            { text: 'Giả vờ không nghe thấy', correct: false }
        ]
    },
    {
        question: 'Đâu là cách bảo vệ thông tin cá nhân trên mạng xã hội?',
        answers: [
            { text: 'Công khai tất cả thông tin', correct: false },
            { text: 'Chấp nhận tất cả lời mời kết bạn', correct: false },
            { text: 'Chia sẻ mật khẩu tài khoản', correct: false },
            { text: 'Cài đặt quyền riêng tư chặt chẽ, cẩn trọng khi chấp nhận lời mời kết bạn từ người lạ', correct: true }
        ]
    },
    {
        question: 'Mã độc tống tiền (Ransomware) là loại phần mềm độc hại làm gì?',
        answers: [
            { text: 'Hiển thị quảng cáo', correct: false },
            { text: 'Mã hóa dữ liệu của nạn nhân và yêu cầu trả tiền để giải mã', correct: true },
            { text: 'Tăng tốc độ máy tính', correct: false },
            { text: 'Xóa các tệp không cần thiết', correct: false }
        ]
    },
    {
        question: 'Bạn nên làm gì để phòng tránh mã độc tống tiền?',
        answers: [
            { text: 'Mở tất cả các tệp đính kèm trong email', correct: false },
            { text: 'Tắt chức năng sao lưu', correct: false },
            { text: 'Tải phần mềm từ các nguồn không chính thức', correct: false },
            { text: 'Sao lưu dữ liệu thường xuyên, cẩn trọng với email và đường link lạ, cập nhật phần mềm diệt virus', correct: true }
        ]
    },
    {
        question: 'Lừa đảo "việc nhẹ lương cao" trên mạng thường có dấu hiệu gì?',
        answers: [
            { text: 'Yêu cầu đặt cọc hoặc thanh toán trước khi bắt đầu công việc', correct: true },
            { text: 'Cung cấp thông tin rõ ràng về công ty và công việc', correct: false },
            { text: 'Lương thưởng hợp lý', correct: false },
            { text: 'Không yêu cầu bất kỳ khoản phí nào', correct: false }
        ]
    },
    {
        question: 'Khi trình duyệt web hiển thị cảnh báo về trang web không an toàn, bạn nên làm gì?',
        answers: [
            { text: 'Bỏ qua cảnh báo và tiếp tục truy cập', correct: false },
            { text: 'Cung cấp thông tin cá nhân', correct: false },
            { text: 'Tải xuống tệp từ trang web đó', correct: false },
            { text: 'Đóng trang web ngay lập tức', correct: true }
        ]
    },
    {
        question: 'Nên sử dụng trình quản lý mật khẩu để làm gì?',
        answers: [
            { text: 'Lưu trữ mật khẩu đơn giản', correct: false },
            { text: 'Chia sẻ mật khẩu với người khác', correct: false },
            { text: 'Giảm số lượng mật khẩu cần nhớ', correct: false },
            { text: 'Tạo và lưu trữ các mật khẩu phức tạp một cách an toàn', correct: true }
        ]
    },
    {
        question: 'Tấn công DDoS (Distributed Denial of Service) là gì?',
        answers: [
            { text: 'Tấn công nhằm đánh cắp dữ liệu', correct: false },
            { text: 'Tấn công nhằm thay đổi nội dung trang web', correct: false },
            { text: 'Tấn công làm quá tải hệ thống máy chủ, khiến dịch vụ bị gián đoạn', correct: true },
            { text: 'Tấn công nhằm lây lan virus', correct: false }
        ]
    },
    {
        question: 'Để bảo vệ tài khoản ngân hàng trực tuyến, bạn nên làm gì?',
        answers: [
            { text: 'Chia sẻ thông tin đăng nhập', correct: false },
            { text: 'Giao dịch trên các trang web không có https', correct: false },
            { text: 'Không kiểm tra sao kê ngân hàng', correct: false },
            { text: 'Sử dụng mật khẩu mạnh, bật xác thực hai yếu tố, không truy cập từ mạng Wi-Fi công cộng không bảo mật', correct: true }
        ]
    },
    {
        question: 'Kỹ thuật "social engineering" trong an toàn thông tin là gì?',
        answers: [
            { text: 'Sử dụng công nghệ phức tạp để tấn công hệ thống', correct: false },
            { text: 'Thao túng tâm lý con người để lấy thông tin hoặc truy cập trái phép', correct: true },
            { text: 'Chỉ liên quan đến mạng xã hội', correct: false },
            { text: 'Xây dựng phần mềm bảo mật', correct: false }
        ]
    },
    {
        question: 'Khi nhận được yêu cầu cập nhật thông tin tài khoản qua một đường link trong email, bạn nên làm gì?',
        answers: [
            { text: 'Click vào link và cập nhật thông tin ngay', correct: false },
            { text: 'Chia sẻ đường link với người khác', correct: false },
            { text: 'Không click vào link và truy cập trực tiếp vào trang web chính thức của dịch vụ để kiểm tra', correct: true },
            { text: 'Phản hồi lại email với thông tin cá nhân', correct: false }
        ]
    },
    {
        question: 'Nên cẩn trọng với các quảng cáo trực tuyến nào?',
        answers: [
            { text: 'Quảng cáo từ các thương hiệu lớn', correct: false },
            { text: 'Quảng cáo sản phẩm thông thường', correct: false },
            { text: 'Quảng cáo từ các trang web uy tín', correct: false },
            { text: 'Quảng cáo hứa hẹn lợi nhuận "khủng" một cách dễ dàng hoặc yêu cầu cung cấp thông tin cá nhân nhạy cảm', correct: true }
        ]
    },
    {
        question: 'Lừa đảo qua điện thoại (vishing) là gì?',
        answers: [
            { text: 'Lừa đảo qua email', correct: false },
            { text: 'Lừa đảo qua cuộc gọi điện thoại', correct: true },
            { text: 'Lừa đảo qua tin nhắn SMS', correct: false },
            { text: 'Lừa đảo qua mạng xã hội', correct: false }
        ]
    },
    {
        question: 'Khi sử dụng các ứng dụng trên điện thoại, bạn nên kiểm tra quyền truy cập của ứng dụng vào đâu?',
        answers: [
            { text: 'Không cần kiểm tra', correct: false },
            { text: 'Chỉ kiểm tra dung lượng ứng dụng', correct: false },
            { text: 'Chỉ kiểm tra tên nhà phát triển', correct: false },
            { text: 'Quyền truy cập vào danh bạ, vị trí, ảnh, micro... để đảm bảo phù hợp với chức năng của ứng dụng', correct: true }
        ]
    },
    {
        question: 'Nên làm gì với các thiết bị điện tử cũ không còn sử dụng?',
        answers: [
            { text: 'Bán lại cho người lạ mà không xóa dữ liệu', correct: false },
            { text: 'Vứt bỏ trực tiếp vào thùng rác', correct: false },
            { text: 'Giữ lại tất cả dữ liệu', correct: false },
            { text: 'Xóa sạch dữ liệu cá nhân trước khi bán, cho tặng hoặc tiêu hủy', correct: true }
        ]
    },
    {
        question: 'Lợi ích của việc sử dụng mạng riêng ảo (VPN) là gì?',
        answers: [
            { text: 'Giúp ẩn địa chỉ IP và mã hóa dữ liệu khi truy cập internet, tăng tính riêng tư và bảo mật', correct: true },
            { text: 'Giảm tốc độ internet', correct: false },
            { text: 'Chỉ dùng để xem phim', correct: false },
            { text: 'Không có tác dụng bảo mật', correct: false }
        ]
    },
    {
        question: 'Đâu là một dấu hiệu cảnh báo của lừa đảo "Romans lừa đảo"?',
        answers: [
            { text: 'Yêu cầu chuyển tiền để nhận quà tặng từ nước ngoài', correct: true },
            { text: 'Gửi quà tặng mà không yêu cầu gì', correct: false },
            { text: 'Chỉ trò chuyện thông thường', correct: false },
            { text: 'Cung cấp thông tin cá nhân đầy đủ', correct: false }
        ]
    },
    {
        question: 'Khi nhận được tin nhắn SMS chứa đường link lạ, bạn nên làm gì?',
        answers: [
            { text: 'Click vào đường link để xem nội dung', correct: false },
            { text: 'Không click vào đường link và xóa tin nhắn', correct: true },
            { text: 'Chuyển tiếp tin nhắn cho người khác', correct: false },
            { text: 'Phản hồi lại tin nhắn', correct: false }
        ]
    },
    {
        question: 'Việc cập nhật hệ điều hành và phần mềm trên thiết bị có lợi ích gì về an toàn thông tin?',
        answers: [
            { text: 'Làm giảm hiệu suất thiết bị', correct: false },
            { text: 'Không có tác dụng gì', correct: false },
            { text: 'Tăng nguy cơ bị tấn công', correct: false },
            { text: 'Vá các lỗ hổng bảo mật và tăng cường khả năng chống lại các mối đe dọa mới', correct: true }
        ]
    },
    {
        question: 'Nên làm gì khi phát hiện tài khoản trực tuyến của mình bị xâm nhập?',
        answers: [
            { text: 'Giữ im lặng và không làm gì cả', correct: false },
            { text: 'Chia sẻ thông tin với mọi người', correct: false },
            { text: 'Tạo một tài khoản mới và bỏ qua tài khoản cũ', correct: false },
            { text: 'Thay đổi mật khẩu ngay lập tức, thông báo cho nhà cung cấp dịch vụ và kiểm tra các hoạt động đáng ngờ', correct: true }
        ]
    },
    {
        question: 'An toàn thông tin là trách nhiệm của ai?',
        answers: [
            { text: 'Chỉ của các chuyên gia bảo mật', correct: false },
            { text: 'Chỉ của các tổ chức lớn', correct: false },
            { text: 'Chỉ của nhà cung cấp dịch vụ', correct: false },
            { text: 'Của tất cả mọi người sử dụng công nghệ số', correct: true }
        ]
    },
    {
        question: 'Công nghệ số thay đổi cách chúng ta làm việc như thế nào?',
        answers: [
            { text: 'Làm việc chậm hơn', correct: false },
            { text: 'Giảm sự hợp tác', correct: false },
            { text: 'Chỉ làm việc thủ công', correct: false },
            { text: 'Tăng năng suất, tạo ra các công việc mới và cho phép làm việc từ xa', correct: true }
        ]
    },
    {
        question: 'Đâu là ví dụ về công nghệ số trong nông nghiệp?',
        answers: [
            { text: 'Chỉ sử dụng công cụ thô sơ', correct: false },
            { text: 'Giảm diện tích trồng trọt', correct: false },
            { text: 'Không sử dụng phân bón', correct: false },
            { text: 'Áp dụng IoT để giám sát cây trồng, vật nuôi; sử dụng máy bay không người lái', correct: true }
        ]
    },
    {
        question: 'Thành phố thông minh (Smart City) là gì?',
        answers: [
            { text: 'Là thành phố chỉ có nhiều tòa nhà cao tầng', correct: false },
            { text: 'Là thành phố không có internet', correct: false },
            { text: 'Là thành phố chỉ sử dụng năng lượng truyền thống', correct: false },
            { text: 'Là thành phố ứng dụng công nghệ số để quản lý hạ tầng, nâng cao chất lượng cuộc sống', correct: true }
        ]
    },
    {
        question: 'Lợi ích của việc học trực tuyến theo tốc độ cá nhân là gì?',
        answers: [
            { text: 'Phải theo kịp tốc độ của người khác', correct: false },
            { text: 'Cho phép người học tập trung vào những phần khó và bỏ qua phần đã nắm vững', correct: true },
            { text: 'Bị giới hạn thời gian học', correct: false },
            { text: 'Khó ôn tập lại bài', correct: false }
        ]
    },
    {
        question: 'Thanh toán QR Code là hình thức thanh toán không dùng tiền mặt như thế nào?',
        answers: [
            { text: 'Sử dụng máy POS', correct: false },
            { text: 'Thanh toán bằng thẻ cào điện thoại', correct: false },
            { text: 'Sử dụng điện thoại quét mã để chuyển tiền', correct: true },
            { text: 'Thanh toán bằng tiền xu', correct: false }
        ]
    },
    {
        question: 'Cổng Dịch vụ công Quốc gia giúp người dân tra cứu thông tin về điều gì?',
        answers: [
            { text: 'Kết quả xổ số', correct: false },
            { text: 'Lịch chiếu phim', correct: false },
            { text: 'Thông tin khuyến mãi', correct: false },
            { text: 'Tình trạng giải quyết hồ sơ thủ tục hành chính', correct: true }
        ]
    },
    {
        question: 'Khi tạo mật khẩu, bạn nên tránh sử dụng thông tin nào?',
        answers: [
            { text: 'Các ký tự ngẫu nhiên', correct: false },
            { text: 'Kết hợp chữ và số', correct: false },
            { text: 'Các ký tự đặc biệt', correct: false },
            { text: 'Thông tin cá nhân dễ đoán như tên, ngày sinh, số điện thoại', correct: true },
        ]
    },
    {
        question: 'Lừa đảo qua tin nhắn SMS (smishing) là gì?',
        answers: [
            { text: 'Lừa đảo qua email', correct: false },
            { text: 'Lừa đảo qua mạng xã hội', correct: false },
            { text: 'Lừa đảo qua cuộc gọi điện thoại', correct: false },
            { text: 'Lừa đảo qua tin nhắn SMS', correct: true }
        ]
    },
    {
        question: 'An toàn thông tin nhằm đảm bảo các yếu tố cốt lõi nào?',
        answers: [
            { text: 'Tính bảo mật, tính toàn vẹn và tính sẵn sàng của thông tin', correct: true },
            { text: 'Chỉ tính bảo mật', correct: false },
            { text: 'Chỉ tính khả dụng', correct: false },
            { text: 'Chỉ tính chính xác', correct: false }
        ]
    },
    {
        question: 'Tính toàn vẹn (Integrity) trong an toàn thông tin nghĩa là gì?',
        answers: [
            { text: 'Thông tin chỉ có thể được xem bởi người được phép', correct: false },
            { text: 'Thông tin luôn sẵn sàng để truy cập', correct: false },
            { text: 'Thông tin chính xác, đầy đủ và không bị thay đổi trái phép', correct: true },
            { text: 'Thông tin được sao lưu thường xuyên', correct: false }
        ]
    },
    {
        question: 'Tính sẵn sàng (Availability) trong an toàn thông tin nghĩa là gì?',
        answers: [
            { text: 'Thông tin được bảo vệ khỏi virus', correct: false },
            { text: 'Thông tin được mã hóa', correct: false },
            { text: 'Thông tin và hệ thống luôn sẵn sàng để người dùng hợp pháp truy cập khi cần', correct: true },
            { text: 'Thông tin chỉ được lưu trữ ở một nơi', correct: false }
        ]
    },
    {
        question: 'Tấn công "man-in-the-middle" là gì?',
        answers: [
            { text: 'Tấn công trực tiếp vào máy chủ', correct: false },
            { text: 'Kẻ tấn công chặn và nghe lén hoặc thay đổi dữ liệu truyền giữa hai bên', correct: true },
            { text: 'Tấn công làm sập mạng', correct: false },
            { text: 'Tấn công phát tán thư rác', correct: false }
        ]
    },
    {
        question: 'Làm thế nào để phòng tránh tấn công "man-in-the-middle"?',
        answers: [
            { text: 'Sử dụng mạng Wi-Fi công cộng không bảo mật', correct: false },
            { text: 'Không sử dụng internet', correct: false },
            { text: 'Chia sẻ thông tin cá nhân trên mạng', correct: false },
            { text: 'Sử dụng kết nối HTTPS, VPN và cẩn trọng khi truy cập mạng công cộng', correct: true }
        ]
    },
    {
        question: 'Lừa đảo đầu tư trực tuyến thường có dấu hiệu gì?',
        answers: [
            { text: 'Hứa hẹn lợi nhuận cao, rủi ro thấp và yêu cầu chuyển tiền gấp', correct: true },
            { text: 'Cung cấp thông tin rõ ràng về dự án và công ty', correct: false },
            { text: 'Không yêu cầu bất kỳ khoản phí nào', correct: false },
            { text: 'Có giấy phép hoạt động đầy đủ', correct: false }
        ]
    },
    {
        question: 'Khi sử dụng các dịch vụ trực tuyến, nên tạo mật khẩu riêng biệt cho những tài khoản quan trọng nào?',
        answers: [
            { text: 'Tất cả các tài khoản đều dùng chung mật khẩu', correct: false },
            { text: 'Chỉ tài khoản giải trí', correct: false },
            { text: 'Chỉ tài khoản mua sắm', correct: false },
            { text: 'Email chính, tài khoản ngân hàng, mạng xã hội', correct: true }
        ]
    },
    {
        question: 'Phần mềm diệt virus có chức năng chính là gì?',
        answers: [
            { text: 'Phát hiện, ngăn chặn và loại bỏ phần mềm độc hại', correct: true },
            { text: 'Tăng tốc độ internet', correct: false },
            { text: 'Chỉnh sửa ảnh', correct: false },
            { text: 'Nghe nhạc', correct: false }
        ]
    },
    {
        question: 'Nên làm gì khi nhận được yêu cầu xác nhận thông tin thẻ tín dụng qua điện thoại hoặc email?',
        answers: [
            { text: 'Cung cấp thông tin ngay lập tức', correct: false },
            { text: 'Chia sẻ thông tin với bạn bè', correct: false },
            { text: 'Không cung cấp thông tin và liên hệ trực tiếp với ngân hàng qua số điện thoại chính thức', correct: true },
            { text: 'Trả lời email với thông tin thẻ', correct: false }
        ]
    },
    {
        question: 'Lợi ích của việc sao lưu dữ liệu lên đám mây là gì?',
        answers: [
            { text: 'Tốn kém nhiều chi phí', correct: false },
            { text: 'Dễ bị mất dữ liệu', correct: false },
            { text: 'Chỉ sao lưu được một ít dữ liệu', correct: false },
            { text: 'An toàn, tiện lợi, có thể truy cập từ nhiều thiết bị và địa điểm', correct: true }
        ]
    },
    {
        question: 'Nên cẩn trọng với các cuộc thi hoặc chương trình tặng quà trên mạng xã hội yêu cầu cung cấp thông tin cá nhân hoặc chia sẻ bài viết công khai?',
        answers: [
            { text: 'Nên tham gia hết để nhận quà', correct: false },
            { text: 'Chia sẻ thông tin cá nhân thoải mái', correct: false },
            { text: 'Không cần kiểm tra gì cả', correct: false },
            { text: 'Nên kiểm tra độ uy tín của nguồn và cẩn trọng với việc cung cấp thông tin cá nhân', correct: true }
        ]
    },
    {
        question: 'Lừa đảo "giả danh" (impersonation) là gì?',
        answers: [
            { text: 'Lừa đảo bằng cách giả mạo người khác (người thân, bạn bè, cơ quan chức năng)', correct: true },
            { text: 'Lừa đảo bằng cách gửi thư rác', correct: false },
            { text: 'Lừa đảo bằng cách tạo trang web giả mạo', correct: false },
            { text: 'Lừa đảo bằng cách tấn công hệ thống', correct: false }
        ]
    },
    {
        question: 'Khi cài đặt ứng dụng mới, nên đọc kỹ điều khoản sử dụng và quyền riêng tư để biết ứng dụng thu thập thông tin gì?',
        answers: [
            { text: 'Nên đọc kỹ', correct: true },
            { text: 'Không cần đọc', correct: false },
            { text: 'Chỉ đọc phần giới thiệu', correct: false },
            { text: 'Chỉ đọc tên ứng dụng', correct: false }
        ]
    },
    {
        question: 'Nên làm gì khi nhận được thông báo trúng thưởng các giải thưởng lớn mà bạn không tham gia?',
        answers: [
            { text: 'Liên hệ ngay để nhận giải', correct: false },
            { text: 'Chia sẻ thông báo lên mạng xã hội', correct: false },
            { text: 'Cung cấp thông tin ngân hàng để nhận tiền', correct: false },
            { text: 'Coi chừng lừa đảo, không cung cấp thông tin cá nhân và không chuyển bất kỳ khoản phí nào', correct: true }
        ]
    },
    {
        question: 'Việc sử dụng mật khẩu khác nhau cho các tài khoản quan trọng giúp giảm thiểu rủi ro gì?',
        answers: [
            { text: 'Khó nhớ mật khẩu hơn', correct: false },
            { text: 'Tăng nguy cơ bị hack', correct: false },
            { text: 'Không có tác dụng gì', correct: false },
            { text: 'Nếu một tài khoản bị lộ mật khẩu, các tài khoản khác sẽ không bị ảnh hưởng', correct: true }
        ]
    },
    {
        question: 'Firewall (Tường lửa) có chức năng gì trong an toàn thông tin?',
        answers: [
            { text: 'Tăng tốc độ mạng', correct: false },
            { text: 'Sao lưu dữ liệu', correct: false },
            { text: 'Kiểm soát luồng dữ liệu ra vào mạng và ngăn chặn truy cập trái phép', correct: true },
            { text: 'Quét virus', correct: false }
        ]
    },
    {
        question: 'Nên cẩn trọng với các đường link rút gọn được chia sẻ trên mạng xã hội hoặc tin nhắn vì có thể dẫn đến đâu?',
        answers: [
            { text: 'Các trang web hữu ích', correct: false },
            { text: 'Các trang web độc hại, lừa đảo hoặc chứa mã độc', correct: true },
            { text: 'Các trang web chính thức', correct: false },
            { text: 'Các bài viết thú vị', correct: false }
        ]
    },
    {
        question: 'Chứng chỉ SSL (HTTPS) trên trang web có ý nghĩa gì về an toàn thông tin?',
        answers: [
            { text: 'Trang web không an toàn', correct: false },
            { text: 'Trang web chứa virus', correct: false },
            { text: 'Kết nối giữa trình duyệt và trang web được mã hóa, giúp bảo vệ dữ liệu truyền đi', correct: true },
            { text: 'Trang web không hoạt động', correct: false }
        ]
    },
    {
        question: 'Nên làm gì khi phát hiện hoạt động đáng ngờ trên tài khoản ngân hàng trực tuyến?',
        answers: [
            { text: 'Không làm gì cả', correct: false },
            { text: 'Chia sẻ thông tin lên mạng xã hội', correct: false },
            { text: 'Thay đổi mật khẩu và tiếp tục sử dụng', correct: false },
            { text: 'Liên hệ ngay với ngân hàng để được hỗ trợ', correct: true }
        ]
    },
    {
        question: 'Lừa đảo qua mạng xã hội thường sử dụng những hình thức nào?',
        answers: [
            { text: 'Chỉ đăng bài viết thông thường', correct: false },
            { text: 'Chỉ chia sẻ ảnh', correct: false },
            { text: 'Chỉ kết bạn', correct: false },
            { text: 'Giả mạo tài khoản, gửi tin nhắn lừa đảo, đăng bài quảng cáo sai sự thật', correct: true }
        ]
    },
    {
        question: 'Nên bật chức năng cập nhật tự động cho hệ điều hành và phần mềm để đảm bảo an toàn?',
        answers: [
            { text: 'Nên bật', correct: true },
            { text: 'Không nên bật', correct: false },
            { text: 'Chỉ bật cho một số ứng dụng', correct: false },
            { text: 'Không quan trọng', correct: false }
        ]
    },
    {
        question: 'Lợi ích của việc sử dụng chữ ký số trong giao dịch điện tử là gì?',
        answers: [
            { text: 'Làm chậm quá trình giao dịch', correct: false },
            { text: 'Không có giá trị pháp lý', correct: false },
            { text: 'Dễ dàng bị giả mạo', correct: false },
            { text: 'Xác thực danh tính người ký và đảm bảo tính toàn vẹn của văn bản', correct: true }
        ]
    },
    {
        question: 'Phishing là một dạng tấn công phi kỹ thuật (social engineering) đúng hay sai?',
        answers: [
            { text: 'Đúng', correct: true },
            { text: 'Sai', correct: false }
        ]
    },
    {
        question: 'Nên sử dụng mật khẩu mạnh và khác nhau cho từng tài khoản trực tuyến là biện pháp bảo mật cơ bản đúng hay sai?',
        answers: [
            { text: 'Đúng', correct: true },
            { text: 'Sai', correct: false }
        ]
    },
    {
        question: 'Chia sẻ mật khẩu với người thân hoặc bạn bè thân thiết là an toàn đúng hay sai?',
        answers: [
            { text: 'Đúng', correct: false },
            { text: 'Sai', correct: true }
        ]
    },
    {
        question: 'Tải phần mềm từ các trang web không chính thức hoặc quảng cáo pop-up là an toàn đúng hay sai?',
        answers: [
            { text: 'Đúng', correct: false },
            { text: 'Sai', correct: true }
        ]
    },
    {
        question: 'Kết nối mạng Wi-Fi công cộng không yêu cầu mật khẩu là an toàn để thực hiện giao dịch ngân hàng trực tuyến đúng hay sai?',
        answers: [
            { text: 'Đúng', correct: false },
            { text: 'Sai', correct: true }
        ]
    },
    {
        question: 'Sao lưu dữ liệu thường xuyên giúp bảo vệ dữ liệu khỏi mất mát do tấn công mạng hoặc hỏng hóc thiết bị đúng hay sai?',
        answers: [
            { text: 'Đúng', correct: true },
            { text: 'Sai', correct: false }
        ]
    },
    {
        question: 'Click vào các đường link trong email hoặc tin nhắn từ người lạ là an toàn đúng hay sai?',
        answers: [
            { text: 'Đúng', correct: false },
            { text: 'Sai', correct: true }
        ]
    },
    {
        question: 'Sử dụng xác thực hai yếu tố (2FA) giúp tăng cường bảo mật cho tài khoản đúng hay sai?',
        answers: [
            { text: 'Đúng', correct: true },
            { text: 'Sai', correct: false }
        ]
    },
    {
        question: 'Phần mềm độc hại (malware) có thể đánh cắp thông tin cá nhân hoặc gây hại cho thiết bị đúng hay sai?',
        answers: [
            { text: 'Đúng', correct: true },
            { text: 'Sai', correct: false }
        ]
    },
    {
        question: 'Lừa đảo qua điện thoại (vishing) là hình thức lừa đảo bằng tin nhắn SMS đúng hay sai?',
        answers: [
            { text: 'Đúng', correct: false },
            { text: 'Sai', correct: true }
        ]
    },
    {
        question: 'Kiểm tra quyền truy cập của ứng dụng trước khi cài đặt là không cần thiết đúng hay sai?',
        answers: [
            { text: 'Đúng', correct: false },
            { text: 'Sai', correct: true }
        ]
    },
    {
        question: 'Việc xóa sạch dữ liệu cá nhân trước khi thanh lý thiết bị điện tử cũ là quan trọng để bảo mật đúng hay sai?',
        answers: [
            { text: 'Đúng', correct: true },
            { text: 'Sai', correct: false }
        ]
    },
    {
        question: 'Sử dụng VPN giúp tăng tính riêng tư và bảo mật khi truy cập internet đúng hay sai?',
        answers: [
            { text: 'Đúng', correct: true },
            { text: 'Sai', correct: false }
        ]
    },
    {
        question: 'Lừa đảo "Romans lừa đảo" liên quan đến việc yêu cầu chuyển tiền để nhận quà từ nước ngoài đúng hay sai?',
        answers: [
            { text: 'Đúng', correct: true },
            { text: 'Sai', correct: false }
        ]
    },
    {
        question: 'Click vào đường link lạ trong tin nhắn SMS là an toàn đúng hay sai?',
        answers: [
            { text: 'Đúng', correct: false },
            { text: 'Sai', correct: true }
        ]
    },
    {
        question: 'Cập nhật hệ điều hành và phần mềm giúp tăng cường bảo mật đúng hay sai?',
        answers: [
            { text: 'Đúng', correct: true },
            { text: 'Sai', correct: false }
        ]
    },
    {
        question: 'Khi tài khoản trực tuyến bị xâm nhập, không cần làm gì cả đúng hay sai?',
        answers: [
            { text: 'Đúng', correct: false },
            { text: 'Sai', correct: true }
        ]
    }
]; // Danh sách câu hỏi

// Export the questions array
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
} else {
    window.questions = questions;
}