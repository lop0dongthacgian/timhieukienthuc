const questions = [
    {
        question: 'Nền văn hóa khảo cổ nào tiêu biểu cho thời kỳ Hùng Vương dựng nước?',
        answers: [
            { text: 'Văn hóa Sa Huỳnh', correct: false },
            { text: 'Văn hóa Óc Eo', correct: false },
            { text: 'Văn hóa Đông Sơn', correct: true },
            { text: 'Văn hóa Chăm Pa', correct: false }
        ]
    },
    {
        question: 'Nhà nước Văn Lang tồn tại qua bao nhiêu đời Vua Hùng?',
        answers: [
            { text: '12 đời', correct: false },
            { text: '18 đời', correct: true },
            { text: '36 đời', correct: false },
            { text: '100 đời', correct: false }
        ]
    },
    {
        question: 'Kinh đô của nhà nước Âu Lạc dưới thời An Dương Vương là ở đâu?',
        answers: [
            { text: 'Phong Châu', correct: false },
            { text: 'Cổ Loa', correct: true },
            { text: 'Hoa Lư', correct: false },
            { text: 'Thăng Long', correct: false }
        ]
    },
    {
        question: 'Cuộc khởi nghĩa Hai Bà Trưng bùng nổ vào năm nào?',
        answers: [
            { text: 'Năm 40 SCN', correct: true },
            { text: 'Năm 43 SCN', correct: false },
            { text: 'Năm 248 SCN', correct: false },
            { text: 'Năm 542 SCN', correct: false }
        ]
    },
    {
        question: 'Tên nước Vạn Xuân được đặt dưới triều đại nào?',
        answers: [
            { text: 'Nhà Ngô', correct: false },
            { text: 'Nhà Đinh', correct: false },
            { text: 'Nhà Tiền Lý', correct: true },
            { text: 'Nhà Ngô', correct: false }
        ]
    },
    {
        question: 'Ai là người lãnh đạo cuộc khởi nghĩa lật đổ ách đô hộ của nhà Lương, thành lập nhà nước Vạn Xuân?',
        answers: [
            { text: 'Lý Bí', correct: true },
            { text: 'Mai Thúc Loan', correct: false },
            { text: 'Phùng Hưng', correct: false },
            { text: 'Khúc Thừa Dụ', correct: false }
        ]
    },
    {
        question: 'Trận chiến trên sông Bạch Đằng năm 938, Ngô Quyền đã đánh tan quân xâm lược của triều đại phong kiến phương Bắc nào?',
        answers: [
            { text: 'Nhà Hán', correct: false },
            { text: 'Nhà Tùy', correct: false },
            { text: 'Nhà Đường', correct: false },
            { text: 'Nhà Nam Hán', correct: true }
        ]
    },
    {
        question: 'Sau chiến thắng Bạch Đằng năm 938, Ngô Quyền đã làm gì để khẳng định nền độc lập dân tộc?',
        answers: [
            { text: 'Lên ngôi Hoàng đế', correct: false },
            { text: 'Xây dựng kinh đô ở Hoa Lư', correct: false },
            { text: 'Bỏ chức Tiết độ sứ, xưng vương, đóng đô ở Cổ Loa', correct: true },
            { text: 'Chia nước làm 12 sứ quân', correct: false }
        ]
    },
    {
        question: 'Thời kỳ "Loạn 12 sứ quân" diễn ra sau sự kiện nào?',
        answers: [
            { text: 'Nhà Ngô suy yếu và sụp đổ', correct: true },
            { text: 'Nhà Đinh thành lập', correct: false },
            { text: 'Nhà Tiền Lê thành lập', correct: false },
            { text: 'Khúc Thừa Dụ giành quyền tự chủ', correct: false }
        ]
    },
    {
        question: 'Ai là người đã dẹp tan "Loạn 12 sứ quân", thống nhất đất nước và lên ngôi Hoàng đế?',
        answers: [
            { text: 'Đinh Bộ Lĩnh', correct: true },
            { text: 'Lê Hoàn', correct: false },
            { text: 'Lý Công Uẩn', correct: false },
            { text: 'Trần Cảnh', correct: false }
        ]
    },
    {
        question: 'Nhà Đinh đặt quốc hiệu là gì?',
        answers: [
            { text: 'Đại Cồ Việt', correct: true },
            { text: 'Đại Việt', correct: false },
            { text: 'Việt Nam', correct: false },
            { text: 'Đại Nam', correct: false }
        ]
    },
    {
        question: 'Kinh đô của nhà Đinh và nhà Tiền Lê đặt ở đâu?',
        answers: [
            { text: 'Cổ Loa', correct: false },
            { text: 'Thăng Long', correct: false },
            { text: 'Hoa Lư', correct: true },
            { text: 'Phú Xuân', correct: false }
        ]
    },
    {
        question: 'Ai là người lãnh đạo cuộc kháng chiến chống Tống lần thứ nhất vào năm 981?',
        answers: [
            { text: 'Đinh Tiên Hoàng', correct: false },
            { text: 'Lê Hoàn', correct: true },
            { text: 'Lý Thường Kiệt', correct: false },
            { text: 'Trần Quốc Tuấn', correct: false }
        ]
    },
    {
        question: 'Triều đại nào đã dời đô từ Hoa Lư về Thăng Long (Hà Nội ngày nay)?',
        answers: [
            { text: 'Nhà Đinh', correct: false },
            { text: 'Nhà Tiền Lê', correct: false },
            { text: 'Nhà Lý', correct: true },
            { text: 'Nhà Trần', correct: false }
        ]
    },
    {
        question: 'Bộ luật thành văn đầu tiên của Việt Nam có tên là gì, được ban hành dưới triều đại nào?',
        answers: [
            { text: 'Hình Thư (nhà Lý)', correct: true },
            { text: 'Hình Luật (nhà Trần)', correct: false },
            { text: 'Quốc Triều Hình Luật (nhà Hậu Lê)', correct: false },
            { text: 'Hoàng Việt Luật Lệ (nhà Nguyễn)', correct: false }
        ]
    },
    {
        question: 'Tác phẩm "Nam quốc sơn hà" được coi là bản Tuyên ngôn độc lập đầu tiên của Việt Nam, gắn liền với cuộc kháng chiến chống quân Tống dưới sự lãnh đạo của ai?',
        answers: [
            { text: 'Lê Hoàn', correct: false },
            { text: 'Lý Thường Kiệt', correct: true },
            { text: 'Trần Quốc Tuấn', correct: false },
            { text: 'Nguyễn Huệ', correct: false }
        ]
    },
    {
        question: 'Ba lần kháng chiến chống quân Mông - Nguyên thắng lợi vang dội diễn ra dưới triều đại nào?',
        answers: [
            { text: 'Nhà Lý', correct: false },
            { text: 'Nhà Trần', correct: true },
            { text: 'Nhà Hồ', correct: false },
            { text: 'Nhà Hậu Lê', correct: false }
        ]
    },
    {
        question: 'Hội nghị Diên Hồng là biểu tượng của sự đoàn kết toàn dân trong cuộc kháng chiến chống quân Mông - Nguyên lần thứ mấy?',
        answers: [
            { text: 'Lần thứ nhất', correct: false },
            { text: 'Lần thứ hai', correct: true },
            { text: 'Lần thứ ba', correct: false },
            { text: 'Cả ba lần', correct: false }
        ]
    },
    {
        question: 'Ai là tác giả của "Hịch tướng sĩ", có tác dụng cổ vũ tinh thần chiến đấu của quân dân nhà Trần?',
        answers: [
            { text: 'Trần Hưng Đạo (Trần Quốc Tuấn)', correct: true },
            { text: 'Trần Quang Khải', correct: false },
            { text: 'Trần Thủ Độ', correct: false },
            { text: 'Trần Nhân Tông', correct: false }
        ]
    },
    {
        question: 'Triều đại nào được coi là đỉnh cao của chế độ phong kiến Việt Nam về mọi mặt (kinh tế, chính trị, văn hóa, giáo dục)?',
        answers: [
            { text: 'Nhà Lý', correct: false },
            { text: 'Nhà Trần', correct: false },
            { text: 'Nhà Hồ', correct: false },
            { text: 'Nhà Hậu Lê (thời Lê Sơ)', correct: true }
        ]
    },
    {
        question: 'Ai là người đã lãnh đạo cuộc khởi nghĩa Lam Sơn đánh đuổi quân Minh, giành lại độc lập cho đất nước vào thế kỷ XV?',
        answers: [
            { text: 'Trần Hưng Đạo', correct: false },
            { text: 'Lê Lợi', correct: true },
            { text: 'Nguyễn Trãi', correct: false },
            { text: 'Nguyễn Huệ', correct: false }
        ]
    },
    {
        question: 'Tác phẩm "Bình Ngô đại cáo" là bản tuyên ngôn độc lập lần thứ hai của Việt Nam, do ai sáng tác?',
        answers: [
            { text: 'Lê Lợi', correct: false },
            { text: 'Nguyễn Trãi', correct: true },
            { text: 'Trần Nguyên Hãn', correct: false },
            { text: 'Lê Thánh Tông', correct: false }
        ]
    },
    {
        question: 'Vua Lê Thánh Tông đã thực hiện cuộc cải cách hành chính quan trọng nào?',
        answers: [
            { text: 'Chia cả nước thành các lộ', correct: false },
            { text: 'Chia cả nước thành các đạo', correct: false },
            { text: 'Chia cả nước thành các tỉnh', correct: false },
            { text: 'Chia cả nước thành 13 đạo thừa tuyên', correct: true }
        ]
    },
    {
        question: 'Giai đoạn Trịnh - Nguyễn phân tranh (Đàng Ngoài - Đàng Trong) diễn ra vào thời kỳ nào?',
        answers: [
            { text: 'Cuối nhà Trần', correct: false },
            { text: 'Nhà Hồ', correct: false },
            { text: 'Nhà Hậu Lê (thời Lê Trung Hưng)', correct: true },
            { text: 'Nhà Tây Sơn', correct: false }
        ]
    },
    {
        question: 'Ai là người đã lập nên vương triều Tây Sơn, lãnh đạo các cuộc khởi nghĩa nông dân và đánh bại các thế lực phong kiến khác?',
        answers: [
            { text: 'Nguyễn Huệ', correct: false },
            { text: 'Nguyễn Nhạc', correct: false },
            { text: 'Nguyễn Lữ', correct: false },
            { text: 'Cả A, B, C', correct: true }
        ]
    },
    {
        question: 'Trận Rạch Gầm - Xoài Mút (năm 1785), nghĩa quân Tây Sơn đã đánh tan quân xâm lược của quốc gia nào?',
        answers: [
            { text: 'Xiêm La', correct: true },
            { text: 'Thanh', correct: false },
            { text: 'Chân Lạp', correct: false },
            { text: 'Vạn Tượng', correct: false }
        ]
    },
    {
        question: 'Trận Ngọc Hồi - Đống Đa (Xuân Kỷ Dậu 1789), Quang Trung - Nguyễn Huệ đã đánh tan quân xâm lược của triều đại nào?',
        answers: [
            { text: 'Xiêm La', correct: false },
            { text: 'Thanh', correct: false },
            { text: 'Mãn Thanh', correct: true },
            { text: 'Minh', correct: false }
        ]
    },
    {
        question: 'Nhà Nguyễn được thành lập vào năm nào?',
        answers: [
            { text: 'Năm 1789', correct: false },
            { text: 'Năm 1802', correct: true },
            { text: 'Năm 1858', correct: false },
            { text: 'Năm 1945', correct: false }
        ]
    },
    {
        question: 'Vua Gia Long là người đã thống nhất đất nước sau thời kỳ Tây Sơn và lập ra triều Nguyễn, tên thật của ông là gì?',
        answers: [
            { text: 'Nguyễn Huệ', correct: false },
            { text: 'Nguyễn Nhạc', correct: false },
            { text: 'Nguyễn Ánh', correct: true },
            { text: 'Nguyễn Lữ', correct: false }
        ]
    },
    {
        question: 'Kinh đô của nhà Nguyễn đặt ở đâu?',
        answers: [
            { text: 'Thăng Long', correct: false },
            { text: 'Hoa Lư', correct: false },
            { text: 'Phú Xuân (Huế)', correct: true },
            { text: 'Gia Định', correct: false }
        ]
    },
    {
        question: 'Thực dân Pháp bắt đầu xâm lược Việt Nam vào năm nào, tại địa điểm nào?',
        answers: [
            { text: 'Năm 1858 tại Đà Nẵng', correct: true },
            { text: 'Năm 1862 tại Sài Gòn', correct: false },
            { text: 'Năm 1884 tại Thuận An', correct: false },
            { text: 'Năm 1897 trên toàn Đông Dương', correct: false }
        ]
    },
    {
        question: 'Hiệp ước Patơnốt (1884) đã chính thức chấm dứt sự tồn tại độc lập của triều Nguyễn và Việt Nam trở thành thuộc địa của Pháp. Triều đình nhà Nguyễn ký hiệp ước này dưới thời vua nào?',
        answers: [
            { text: 'Vua Tự Đức', correct: false },
            { text: 'Vua Hàm Nghi', correct: false },
            { text: 'Vua Đồng Khánh', correct: false },
            { text: 'Vua Kiến Phúc', correct: true }
        ]
    },
    {
        question: 'Phong trào Cần Vương là phong trào đấu tranh chống Pháp của tầng lớp nào trong xã hội Việt Nam cuối thế kỷ XIX?',
        answers: [
            { text: 'Nông dân', correct: false },
            { text: 'Văn thân, sĩ phu yêu nước', correct: true },
            { text: 'Công nhân', correct: false },
            { text: 'Tư sản dân tộc', correct: false }
        ]
    },
    {
        question: 'Ai là người đã ra chiếu Cần Vương, kêu gọi toàn dân kháng chiến chống Pháp?',
        answers: [
            { text: 'Vua Hàm Nghi', correct: true },
            { text: 'Tôn Thất Thuyết', correct: false },
            { text: 'Phan Đình Phùng', correct: false },
            { text: 'Hoàng Hoa Thám', correct: false }
        ]
    },
    {
        question: 'Cuộc khởi nghĩa Yên Thế do ai lãnh đạo, kéo dài trong khoảng thời gian nào?',
        answers: [
            { text: 'Phan Đình Phùng (1885-1895)', correct: false },
            { text: 'Hoàng Hoa Thám (1884-1913)', correct: true },
            { text: 'Nguyễn Thái Học (1930)', correct: false },
            { text: 'Lương Ngọc Quyến (1917)', correct: false }
        ]
    },
    {
        question: 'Phong trào Đông Du do ai khởi xướng, nhằm mục đích gì?',
        answers: [
            { text: 'Phan Châu Trinh - Cải cách xã hội', correct: false },
            { text: 'Phan Bội Châu - Sang Nhật Bản học tập và chuẩn bị lực lượng chống Pháp', correct: true },
            { text: 'Nguyễn Ái Quốc - Tìm đường cứu nước', correct: false },
            { text: 'Hoàng Hoa Thám - Duy trì cuộc sống tự do ở Yên Thế', correct: false }
        ]
    },
    {
        question: 'Tổ chức tiền thân của Đảng Cộng sản Việt Nam được thành lập vào năm 1925 với tên gọi là gì?',
        answers: [
            { text: 'Hội Việt Nam Cách mạng Thanh niên', correct: true },
            { text: 'Tân Việt Cách mạng Đảng', correct: false },
            { text: 'Việt Nam Quốc dân Đảng', correct: false },
            { text: 'Đông Dương Cộng sản Đảng', correct: false }
        ]
    },
    {
        question: 'Đông Dương Cộng sản Đảng và An Nam Cộng sản Đảng được thành lập từ sự phân hóa của tổ chức nào?',
        answers: [
            { text: 'Việt Nam Quốc dân Đảng', correct: false },
            { text: 'Tân Việt Cách mạng Đảng', correct: false },
            { text: 'Hội Việt Nam Cách mạng Thanh niên', correct: true },
            { text: 'Thanh niên Cao Vọng', correct: false }
        ]
    },
    {
        question: 'Đảng Cộng sản Việt Nam được thành lập vào ngày, tháng, năm nào?',
        answers: [
            { text: '3/2/1930', correct: true },
            { text: '3/2/1931', correct: false },
            { text: '1/5/1930', correct: false },
            { text: '1/5/1931', correct: false }
        ]
    },
    {
        question: 'Nguyễn Ái Quốc đã chủ trì Hội nghị hợp nhất các tổ chức cộng sản tại đâu để thành lập Đảng Cộng sản Việt Nam?',
        answers: [
            { text: 'Quảng Châu (Trung Quốc)', correct: false },
            { text: 'Hương Cảng (Trung Quốc)', correct: true },
            { text: 'Pari (Pháp)', correct: false },
            { text: 'Matxcova (Liên Xô)', correct: false }
        ]
    },
    {
        question: 'Cao trào cách mạng 1930-1931 mà đỉnh cao là Xô Viết Nghệ Tĩnh là phong trào đấu tranh của lực lượng nào dưới sự lãnh đạo của Đảng Cộng sản Việt Nam?',
        answers: [
            { text: 'Công nhân', correct: false },
            { text: 'Nông dân', correct: false },
            { text: 'Tiểu tư sản', correct: false },
            { text: 'Công nhân và nông dân', correct: true }
        ]
    },
    {
        question: 'Mặt trận Việt Minh được thành lập vào năm nào?',
        answers: [
            { text: 'Năm 1930', correct: false },
            { text: 'Năm 1936', correct: false },
            { text: 'Năm 1941', correct: true },
            { text: 'Năm 1945', correct: false }
        ]
    },
    {
        question: 'Đội Việt Nam Tuyên truyền Giải phóng quân, tiền thân của Quân đội nhân dân Việt Nam, được thành lập vào ngày, tháng, năm nào?',
        answers: [
            { text: '22/12/1944', correct: true },
            { text: '19/8/1945', correct: false },
            { text: '2/9/1945', correct: false },
            { text: '7/5/1954', correct: false }
        ]
    },
    {
        question: 'Cuộc đảo chính của Nhật lật đổ Pháp ở Đông Dương diễn ra vào thời gian nào?',
        answers: [
            { text: 'Tháng 3 năm 1945', correct: true },
            { text: 'Tháng 8 năm 1945', correct: false },
            { text: 'Tháng 9 năm 1945', correct: false },
            { text: 'Tháng 12 năm 1944', correct: false }
        ]
    },
    {
        question: 'Khẩu hiệu "Đánh đuổi phát xít Nhật" và "Thành lập chính quyền cách mạng của nhân dân" là chủ trương của Đảng ta trong thời kỳ nào?',
        answers: [
            { text: 'Trước Chiến tranh thế giới thứ hai', correct: false },
            { text: 'Trong Chiến tranh thế giới thứ hai, khi Nhật đảo chính Pháp', correct: true },
            { text: 'Sau Chiến tranh thế giới thứ hai', correct: false },
            { text: 'Trong phong trào 1936-1939', correct: false }
        ]
    },
    {
        question: 'Tổng khởi nghĩa giành chính quyền trong Cách mạng tháng Tám năm 1945 diễn ra thành công nhanh chóng và ít đổ máu là do đâu?',
        answers: [
            { text: 'Kẻ thù chính là Nhật Bản đã đầu hàng Đồng minh', correct: false },
            { text: 'Sự lãnh đạo đúng đắn của Đảng và Mặt trận Việt Minh', correct: false },
            { text: 'Tinh thần yêu nước và sự chuẩn bị chu đáo của nhân dân', correct: false },
            { text: 'Tất cả các yếu tố trên', correct: true }
        ]
    },
    {
        question: 'Vua Bảo Đại thoái vị, chấm dứt chế độ phong kiến ở Việt Nam vào thời gian nào?',
        answers: [
            { text: 'Ngày 19 tháng 8 năm 1945', correct: false },
            { text: 'Ngày 23 tháng 8 năm 1945', correct: false },
            { text: 'Ngày 30 tháng 8 năm 1945', correct: true },
            { text: 'Ngày 2 tháng 9 năm 1945', correct: false }
        ]
    },
    {
        question: 'Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn độc lập, khai sinh ra nước Việt Nam Dân chủ Cộng hòa vào ngày, tháng, năm nào?',
        answers: [
            { text: 'Ngày 19 tháng 8 năm 1945', correct: false },
            { text: 'Ngày 23 tháng 8 năm 1945', correct: false },
            { text: 'Ngày 30 tháng 8 năm 1945', correct: false },
            { text: 'Ngày 2 tháng 9 năm 1945', correct: true }
        ]
    },
    {
        question: 'Thủ đô của nước Việt Nam Dân chủ Cộng hòa sau Cách mạng tháng Tám năm 1945 là ở đâu?',
        answers: [
            { text: 'Huế', correct: false },
            { text: 'Sài Gòn', correct: false },
            { text: 'Hà Nội', correct: true },
            { text: 'Cổ Loa', correct: false }
        ]
    },
    {
        question: 'Sau Cách mạng tháng Tám, Việt Nam phải đối mặt với những khó khăn "thù trong giặc ngoài" nào?',
        answers: [
            { text: 'Quân Tưởng Giới Thạch ở miền Bắc, quân Anh và Pháp ở miền Nam', correct: false },
            { text: 'Nạn đói, nạn dốt, ngân sách trống rỗng', correct: false },
            { text: 'Các đảng phái phản cách mạng nổi dậy chống phá', correct: false },
            { text: 'Tất cả các khó khăn trên', correct: true }
        ]
    },
    {
        question: 'Thực dân Pháp bắt đầu quay trở lại xâm lược Việt Nam lần thứ hai vào thời gian nào?',
        answers: [
            { text: 'Tháng 9 năm 1945 tại Sài Gòn', correct: true },
            { text: 'Tháng 12 năm 1946 tại Hà Nội', correct: false },
            { text: 'Tháng 5 năm 1954 tại Điện Biên Phủ', correct: false },
            { text: 'Tháng 7 năm 1954 tại Giơnevơ', correct: false }
        ]
    },
    {
        question: 'Lời kêu gọi Toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh được đưa ra vào ngày, tháng, năm nào?',
        answers: [
            { text: '19/12/1946', correct: true },
            { text: '20/12/1946', correct: false },
            { text: '6/1/1947', correct: false },
            { text: '7/5/1954', correct: false }
        ]
    },
    {
        question: 'Chiến dịch Biên giới Thu Đông năm 1950 thắng lợi đã có ý nghĩa quan trọng gì?',
        answers: [
            { text: 'Đánh dấu sự chuyển sang giai đoạn phản công của quân đội ta', correct: false },
            { text: 'Giành quyền chủ động trên chiến trường chính (Bắc Bộ)', correct: false },
            { text: 'Chọc thủng vòng vây biên giới, khai thông con đường liên lạc với các nước xã hội chủ nghĩa', correct: false },
            { text: 'Cả B và C', correct: true }
        ]
    },
    {
        question: 'Đại hội đại biểu toàn quốc lần thứ II của Đảng Cộng sản Đông Dương (năm 1951) đã quyết định đổi tên Đảng thành gì?',
        answers: [
            { text: 'Đảng Cộng sản Việt Nam', correct: false },
            { text: 'Đảng Lao động Việt Nam', correct: true },
            { text: 'Đảng Cộng sản Đông Dương', correct: false },
            { text: 'Đảng Công nhân Việt Nam', correct: false }
        ]
    },
    {
        question: 'Chiến dịch Điện Biên Phủ diễn ra vào thời gian nào?',
        answers: [
            { text: 'Cuối năm 1953', correct: false },
            { text: 'Đầu năm 1954', correct: false },
            { text: 'Từ tháng 3 đến tháng 5 năm 1954', correct: true },
            { text: 'Tháng 7 năm 1954', correct: false }
        ]
    },
    {
        question: 'Ai là Tổng tư lệnh của Chiến dịch Điện Biên Phủ?',
        answers: [
            { text: 'Chủ tịch Hồ Chí Minh', correct: false },
            { text: 'Đại tướng Võ Nguyên Giáp', correct: true },
            { text: 'Tổng Bí thư Trường Chinh', correct: false },
            { text: 'Thủ tướng Phạm Văn Đồng', correct: false }
        ]
    },
    {
        question: 'Chiến thắng Điện Biên Phủ (7/5/1954) đã có tác động quyết định đến sự kiện nào?',
        answers: [
            { text: 'Hiệp định Sơ bộ (1946)', correct: false },
            { text: 'Tạm ước (1946)', correct: false },
            { text: 'Hội nghị Giơnevơ về Đông Dương (1954)', correct: true },
            { text: 'Hiệp định Pari (1973)', correct: false }
        ]
    },
    {
        question: 'Theo Hiệp định Giơnevơ năm 1954, Việt Nam tạm thời bị chia cắt làm hai miền tại vĩ tuyến bao nhiêu?',
        answers: [
            { text: 'Vĩ tuyến 16', correct: false },
            { text: 'Vĩ tuyến 17', correct: true },
            { text: 'Vĩ tuyến 18', correct: false },
            { text: 'Vĩ tuyến 20', correct: false }
        ]
    },
    {
        question: 'Sau Hiệp định Giơnevơ, miền Bắc Việt Nam bước vào thời kỳ nào?',
        answers: [
            { text: 'Kháng chiến chống Mỹ', correct: false },
            { text: 'Xây dựng chủ nghĩa xã hội', correct: true },
            { text: 'Đấu tranh thống nhất đất nước', correct: false },
            { text: 'Tất cả các phương án trên', correct: false }
        ]
    },
    {
        question: 'Sau Hiệp định Giơnevơ, đế quốc Mỹ đã làm gì ở miền Nam Việt Nam?',
        answers: [
            { text: 'Thi hành Hiệp định Giơnevơ', correct: false },
            { text: 'Rút quân khỏi miền Nam', correct: false },
            { text: 'Hất cẳng Pháp, dựng lên chính quyền tay sai Ngô Đình Diệm', correct: true },
            { text: 'Tôn trọng độc lập, chủ quyền và toàn vẹn lãnh thổ của Việt Nam', correct: false }
        ]
    },
    {
        question: 'Phong trào Đồng khởi (1959-1960) ở miền Nam Việt Nam là sự bùng nổ của lực lượng nào chống lại chính quyền Ngô Đình Diệm?',
        answers: [
            { text: 'Công nhân', correct: false },
            { text: 'Nông dân', correct: false },
            { text: 'Học sinh, sinh viên', correct: false },
            { text: 'Toàn dân', correct: true }
        ]
    },
    {
        question: 'Mặt trận Dân tộc Giải phóng miền Nam Việt Nam được thành lập vào thời gian nào?',
        answers: [
            { text: 'Năm 1954', correct: false },
            { text: 'Năm 1959', correct: false },
            { text: 'Năm 1960', correct: true },
            { text: 'Năm 1965', correct: false }
        ]
    },
    {
        question: 'Chiến lược chiến tranh nào của đế quốc Mỹ ở miền Nam Việt Nam sử dụng khẩu hiệu "tìm và diệt"?',
        answers: [
            { text: 'Chiến tranh đặc biệt', correct: false },
            { text: 'Chiến tranh cục bộ', correct: true },
            { text: 'Việt Nam hóa chiến tranh', correct: false },
            { text: 'Đông Dương hóa chiến tranh', correct: false }
        ]
    },
    {
        question: 'Chiến thắng Ấp Bắc (năm 1963) là thắng lợi mở màn của quân dân miền Nam chống lại chiến lược chiến tranh nào của Mỹ?',
        answers: [
            { text: 'Chiến tranh đặc biệt', correct: true },
            { text: 'Chiến tranh cục bộ', correct: false },
            { text: 'Việt Nam hóa chiến tranh', correct: false },
            { text: 'Đông Dương hóa chiến tranh', correct: false }
        ]
    },
    {
        question: 'Mỹ bắt đầu tiến hành chiến tranh phá hoại miền Bắc lần thứ nhất vào thời gian nào?',
        answers: [
            { text: 'Năm 1963', correct: false },
            { text: 'Năm 1964', correct: false },
            { text: 'Năm 1965', correct: true },
            { text: 'Năm 1968', correct: false }
        ]
    },
    {
        question: 'Sự kiện Tết Mậu Thân năm 1968 là cuộc tổng tiến công và nổi dậy của quân dân miền Nam trên khắp các đô thị, có ý nghĩa gì?',
        answers: [
            { text: 'Buộc Mỹ phải ngừng ném bom miền Bắc', correct: false },
            { text: 'Mở ra cuộc đàm phán Pari về Việt Nam', correct: false },
            { text: 'Đánh dấu sự phá sản của chiến lược Chiến tranh cục bộ', correct: false },
            { text: 'Tất cả các ý trên', correct: true }
        ]
    },
    {
        question: 'Chiến lược "Việt Nam hóa chiến tranh" của Mỹ nhằm mục đích gì?',
        answers: [
            { text: 'Tăng cường quân đội Mỹ tại miền Nam', correct: false },
            { text: 'Rút dần quân Mỹ và tăng cường lực lượng quân đội Sài Gòn', correct: true },
            { text: 'Mở rộng chiến tranh ra toàn Đông Dương', correct: false },
            { text: 'Sử dụng vũ khí hạt nhân để kết thúc chiến tranh', correct: false }
        ]
    },
    {
        question: 'Hiệp định Pari về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam được ký kết vào thời gian nào?',
        answers: [
            { text: 'Năm 1968', correct: false },
            { text: 'Năm 1972', correct: false },
            { text: 'Năm 1973', correct: true },
            { text: 'Năm 1975', correct: false }
        ]
    },
    {
        question: 'Theo Hiệp định Pari năm 1973, ai là đại diện ký kết của Chính phủ Việt Nam Dân chủ Cộng hòa?',
        answers: [
            { text: 'Lê Đức Thọ', correct: false },
            { text: 'Nguyễn Duy Trinh', correct: false },
            { text: 'Xuân Thủy', correct: true },
            { text: 'Phạm Văn Đồng', correct: false }
        ]
    },
    {
        question: 'Sau Hiệp định Pari, Mỹ rút hết quân về nước nhưng vẫn tiếp tục viện trợ cho chính quyền Sài Gòn. Ta đã mở cuộc Tổng tiến công và nổi dậy mùa Xuân năm 1975, bắt đầu bằng chiến dịch nào?',
        answers: [
            { text: 'Chiến dịch Tây Nguyên', correct: true },
            { text: 'Chiến dịch Huế - Đà Nẵng', correct: false },
            { text: 'Chiến dịch Hồ Chí Minh', correct: false },
            { text: 'Chiến dịch đường 9 - Nam Lào', correct: false }
        ]
    },
    {
        question: 'Chiến dịch Hồ Chí Minh lịch sử giải phóng hoàn toàn miền Nam, thống nhất đất nước diễn ra vào thời gian nào?',
        answers: [
            { text: 'Từ tháng 3 đến tháng 5 năm 1975', correct: false },
            { text: 'Từ ngày 26 tháng 4 đến ngày 30 tháng 4 năm 1975', correct: true },
            { text: 'Ngày 30 tháng 4 năm 1975', correct: false },
            { text: 'Tháng 5 năm 1975', correct: false }
        ]
    },
    {
        question: 'Tổng thống cuối cùng của chế độ Việt Nam Cộng hòa đã đầu hàng vào trưa ngày 30/4/1975 là ai?',
        answers: [
            { text: 'Nguyễn Văn Thiệu', correct: false },
            { text: 'Nguyễn Cao Kỳ', correct: false },
            { text: 'Dương Văn Minh', correct: true },
            { text: 'Ngô Đình Diệm', correct: false }
        ]
    },
    {
        question: 'Sau khi miền Nam hoàn toàn giải phóng, cả nước bước vào giai đoạn nào?',
        answers: [
            { text: 'Khôi phục kinh tế sau chiến tranh', correct: false },
            { text: 'Xây dựng chủ nghĩa xã hội trên cả nước', correct: true },
            { text: 'Đấu tranh bảo vệ biên giới', correct: false },
            { text: 'Thực hiện công cuộc đổi mới', correct: false }
        ]
    },
    {
        question: 'Kỳ họp Quốc hội khóa VI (năm 1976) đã quyết định đổi tên nước thành gì?',
        answers: [
            { text: 'Việt Nam Dân chủ Cộng hòa', correct: false },
            { text: 'Cộng hòa Xã hội chủ nghĩa Việt Nam', correct: true },
            { text: 'Quốc gia Việt Nam', correct: false },
            { text: 'Liên bang Đông Dương', correct: false }
        ]
    },
    {
        question: 'Thành phố Sài Gòn - Gia Định được đổi tên thành Thành phố Hồ Chí Minh vào năm nào?',
        answers: [
            { text: 'Năm 1975', correct: false },
            { text: 'Năm 1976', correct: true },
            { text: 'Năm 1977', correct: false },
            { text: 'Năm 1986', correct: false }
        ]
    },
    {
        question: 'Đại hội lần thứ IV của Đảng (năm 1976) đã đề ra đường lối cách mạng xã hội chủ nghĩa trong giai đoạn mới, với nhiệm vụ trọng tâm là gì?',
        answers: [
            { text: 'Xây dựng và bảo vệ Tổ quốc xã hội chủ nghĩa', correct: true },
            { text: 'Phát triển công nghiệp hóa, hiện đại hóa', correct: false },
            { text: 'Xây dựng nền kinh tế thị trường định hướng xã hội chủ nghĩa', correct: false },
            { text: 'Thực hiện công cuộc đổi mới toàn diện đất nước', correct: false }
        ]
    },
    {
        question: 'Việt Nam gia nhập Liên Hợp Quốc vào năm nào?',
        answers: [
            { text: 'Năm 1975', correct: false },
            { text: 'Năm 1976', correct: false },
            { text: 'Năm 1977', correct: true },
            { text: 'Năm 1986', correct: false }
        ]
    },
    {
        question: 'Cuộc chiến tranh bảo vệ biên giới Tây Nam của Tổ quốc diễn ra vào thời gian nào?',
        answers: [
            { text: 'Năm 1975-1977', correct: false },
            { text: 'Năm 1977-1978', correct: false },
            { text: 'Năm 1978-1979', correct: true },
            { text: 'Năm 1979-1989', correct: false }
        ]
    },
    {
        question: 'Cuộc chiến tranh bảo vệ biên giới phía Bắc của Tổ quốc diễn ra vào thời gian nào?',
        answers: [
            { text: 'Năm 1978', correct: false },
            { text: 'Năm 1979', correct: true },
            { text: 'Năm 1979-1989', correct: false },
            { text: 'Năm 1986', correct: false }
        ]
    },
    {
        question: 'Giai đoạn từ năm 1976 đến năm 1985, Việt Nam gặp phải những khó khăn chủ yếu nào về kinh tế?',
        answers: [
            { text: 'Nền kinh tế còn mang nặng tính tự cung tự cấp', correct: false },
            { text: 'Hậu quả chiến tranh nặng nề, các thế lực thù địch bao vây cấm vận', correct: false },
            { text: 'Cơ chế quản lý kinh tế tập trung quan liêu bao cấp bộc lộ nhiều yếu kém', correct: false },
            { text: 'Tất cả các khó khăn trên', correct: true }
        ]
    },
    {
        question: 'Bối cảnh quốc tế chủ yếu tác động đến việc Việt Nam thực hiện công cuộc đổi mới vào năm 1986 là gì?',
        answers: [
            { text: 'Sự sụp đổ của hệ thống xã hội chủ nghĩa ở Đông Âu và Liên Xô', correct: false },
            { text: 'Cuộc cách mạng khoa học - kỹ thuật đang phát triển mạnh mẽ', correct: false },
            { text: 'Xu thế toàn cầu hóa và hội nhập quốc tế diễn ra mạnh mẽ', correct: false },
            { text: 'Cả B và C', correct: true }
        ]
    },
    {
        question: 'Đại hội đại biểu toàn quốc lần thứ VI của Đảng Cộng sản Việt Nam (năm 1986) đã đề ra đường lối gì?',
        answers: [
            { text: 'Đường lối kháng chiến toàn dân, toàn diện', correct: false },
            { text: 'Đường lối xây dựng chủ nghĩa xã hội', correct: false },
            { text: 'Đường lối đổi mới toàn diện đất nước', correct: true },
            { text: 'Đường lối công nghiệp hóa, hiện đại hóa', correct: false }
        ]
    },
    {
        question: 'Nội dung cơ bản của đường lối đổi mới do Đảng Cộng sản Việt Nam đề ra năm 1986 là gì?',
        answers: [
            { text: 'Đổi mới về chính trị là trọng tâm', correct: false },
            { text: 'Đổi mới về kinh tế là trọng tâm', correct: false },
            { text: 'Đổi mới toàn diện, đồng bộ, có kế thừa', correct: true },
            { text: 'Chỉ đổi mới về kinh tế, giữ nguyên về chính trị', correct: false }
        ]
    },
    {
        question: 'Quan điểm "Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật" được đề cao tại Đại hội nào của Đảng?',
        answers: [
            { text: 'Đại hội IV (1976)', correct: false },
            { text: 'Đại hội V (1982)', correct: false },
            { text: 'Đại hội VI (1986)', correct: true },
            { text: 'Đại hội VII (1991)', correct: false }
        ]
    },
    {
        question: 'Chủ trương phát triển nền kinh tế hàng hóa nhiều thành phần, vận hành theo cơ chế thị trường có sự quản lý của Nhà nước được đề ra tại Đại hội nào của Đảng?',
        answers: [
            { text: 'Đại hội V (1982)', correct: false },
            { text: 'Đại hội VI (1986)', correct: true },
            { text: 'Đại hội VII (1991)', correct: false },
            { text: 'Đại hội VIII (1996)', correct: false }
        ]
    },
    {
        question: 'Công cuộc đổi mới ở Việt Nam (từ năm 1986) đã chuyển đổi nền kinh tế từ cơ chế nào sang cơ chế nào?',
        answers: [
            { text: 'Từ kinh tế thị trường sang kinh tế kế hoạch hóa tập trung', correct: false },
            { text: 'Từ kinh tế kế hoạch hóa tập trung sang kinh tế thị trường', correct: true },
            { text: 'Từ kinh tế tự cung tự cấp sang kinh tế hàng hóa', correct: false },
            { text: 'Từ kinh tế nông nghiệp sang kinh tế công nghiệp', correct: false }
        ]
    },
    {
        question: 'Thành tựu nổi bật nhất mà Việt Nam đạt được sau những năm đầu thực hiện công cuộc đổi mới (từ 1986) là gì?',
        answers: [
            { text: 'Thoát khỏi tình trạng khủng hoảng kinh tế - xã hội', correct: true },
            { text: 'Bình thường hóa quan hệ với Mỹ', correct: false },
            { text: 'Gia nhập ASEAN', correct: false },
            { text: 'Xuất khẩu gạo đứng đầu thế giới', correct: false }
        ]
    },
    {
        question: 'Việc Việt Nam bình thường hóa quan hệ với Trung Quốc (năm 1991) và Mỹ (năm 1995) có ý nghĩa quan trọng gì?',
        answers: [
            { text: 'Phá vỡ sự bao vây cấm vận của các thế lực thù địch', correct: false },
            { text: 'Mở ra cơ hội hội nhập quốc tế rộng lớn', correct: false },
            { text: 'Cải thiện môi trường đối ngoại cho công cuộc đổi mới', correct: false },
            { text: 'Tất cả các ý trên', correct: true }
        ]
    },
    {
        question: 'Việt Nam chính thức gia nhập Hiệp hội các quốc gia Đông Nam Á (ASEAN) vào năm nào?',
        answers: [
            { text: 'Năm 1986', correct: false },
            { text: 'Năm 1991', correct: false },
            { text: 'Năm 1995', correct: true },
            { text: 'Năm 2007', correct: false }
        ]
    },
    {
        question: 'Công cuộc đổi mới đã mang lại những thay đổi căn bản nào cho xã hội Việt Nam?',
        answers: [
            { text: 'Đời sống vật chất và tinh thần của nhân dân được cải thiện rõ rệt', correct: false },
            { text: 'Vị thế của Việt Nam trên trường quốc tế được nâng cao', correct: false },
            { text: 'Hệ thống chính trị ngày càng được củng cố và hoàn thiện', correct: false },
            { text: 'Tất cả các thay đổi trên', correct: true }
        ]
    },
    {
        question: 'Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (năm 1991) đã xác định mô hình kinh tế tổng quát là gì?',
        answers: [
            { text: 'Kinh tế kế hoạch hóa tập trung', correct: false },
            { text: 'Kinh tế thị trường', correct: false },
            { text: 'Kinh tế thị trường định hướng xã hội chủ nghĩa', correct: true },
            { text: 'Kinh tế nhiều thành phần', correct: false }
        ]
    },
    {
        question: 'Đại hội nào của Đảng Cộng sản Việt Nam đã chính thức đưa ra khái niệm "Kinh tế thị trường định hướng xã hội chủ nghĩa"?',
        answers: [
            { text: 'Đại hội VI (1986)', correct: false },
            { text: 'Đại hội VII (1991)', correct: true },
            { text: 'Đại hội VIII (1996)', correct: false },
            { text: 'Đại hội IX (2001)', correct: false }
        ]
    },
    {
        question: 'Mục tiêu tổng quát của công cuộc đổi mới ở Việt Nam là gì?',
        answers: [
            { text: 'Xây dựng đất nước giàu mạnh, dân chủ, công bằng, văn minh', correct: true },
            { text: 'Đưa Việt Nam trở thành nước công nghiệp phát triển', correct: false },
            { text: 'Nâng cao đời sống vật chất và tinh thần của nhân dân', correct: false },
            { text: 'Hội nhập sâu rộng vào nền kinh tế thế giới', correct: false }
        ]
    },
    {
        question: 'Từ năm 1986 đến thời điểm hiện tại, công cuộc đổi mới ở Việt Nam đã trải qua bao nhiêu kỳ Đại hội Đảng?',
        answers: [
            { text: '6 kỳ', correct: false },
            { text: '7 kỳ', correct: false },
            { text: '8 kỳ', correct: true },
            { text: '9 kỳ', correct: false }
        ]
    },
    {
        question: 'Nghị quyết Hội nghị Trung ương 5 khóa VIII (năm 1998) đã xác định xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc là gì?',
        answers: [
            { text: 'Mục tiêu hàng đầu', correct: false },
            { text: 'Động lực cho sự phát triển', correct: false },
            { text: 'Nền tảng tinh thần của xã hội', correct: true },
            { text: 'Yếu tố quyết định thắng lợi của công cuộc đổi mới', correct: false }
        ]
    },
    {
        question: 'Về đối ngoại, đường lối đổi mới của Việt Nam chủ trương gì?',
        answers: [
            { text: 'Đa dạng hóa, đa phương hóa quan hệ quốc tế', correct: false },
            { text: 'Hội nhập quốc tế sâu rộng', correct: false },
            { text: 'Là bạn, là đối tác tin cậy của các nước, chủ động và tích cực hội nhập quốc tế', correct: false },
            { text: 'Tất cả các phương án trên', correct: true }
        ]
    },
    {
        question: 'Việc Việt Nam gia nhập Tổ chức Thương mại Thế giới (WTO) vào năm 2007 có ý nghĩa quan trọng gì?',
        answers: [
            { text: 'Đánh dấu sự hội nhập toàn diện vào nền kinh tế toàn cầu', correct: false },
            { text: 'Mở ra thị trường xuất khẩu rộng lớn', correct: false },
            { text: 'Thu hút đầu tư nước ngoài', correct: false },
            { text: 'Tất cả các ý trên', correct: true }
        ]
    },
    {
        question: 'Thành tựu về kinh tế nổi bật nhất của Việt Nam trong những năm thực hiện đổi mới là gì?',
        answers: [
            { text: 'Tốc độ tăng trưởng kinh tế cao liên tục', correct: false },
            { text: 'Cơ cấu kinh tế chuyển dịch theo hướng công nghiệp hóa, hiện đại hóa', correct: false },
            { text: 'Đời sống vật chất và tinh thần của nhân dân được cải thiện rõ rệt', correct: false },
            { text: 'Tất cả các ý trên', correct: true }
        ]
    },
    {
        question: 'Bên cạnh những thành tựu, công cuộc đổi mới ở Việt Nam cũng đặt ra những thách thức lớn nào?',
        answers: [
            { text: 'Nguy cơ tụt hậu về kinh tế so với các nước trong khu vực và thế giới', correct: false },
            { text: 'Sự phân hóa giàu nghèo ngày càng gia tăng', correct: false },
            { text: 'Những vấn đề về môi trường, xã hội', correct: false },
            { text: 'Tất cả các thách thức trên', correct: true }
        ]
    },
    {
        question: 'Bài học kinh nghiệm quan trọng nhất được rút ra từ công cuộc đổi mới ở Việt Nam là gì?',
        answers: [
            { text: 'Phải luôn kiên định mục tiêu độc lập dân tộc và chủ nghĩa xã hội', correct: false },
            { text: 'Phải phát huy vai trò lãnh đạo của Đảng Cộng sản Việt Nam', correct: false },
            { text: 'Phải dựa vào dân, vì dân', correct: false },
            { text: 'Tất cả các bài học trên', correct: true }
        ]
    }
]; // Danh sách câu hỏi

// Export the questions array
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
} else {
    window.questions = questions;
}