
import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
const PostCard = () => {
  const data = [
    {id:1,title:'Liên bang đông dương',content:'Liên bang Đông Dương (chữ Nôm: 聯邦東洋, tiếng Pháp: Union indochinoise,[a] sau 1947 là Fédération indochinoise) hay còn gọi là Đông Dương thuộc Pháp, Đông Pháp, là lãnh thổ nằm dưới quyền cai trị của thực dân Pháp trong hơn 67 năm (1887-1954) tại khu vực Đông Nam Á, ngày nay thuộc lãnh thổ Việt Nam, Lào, Campuchia và đất đai của huyện Trạm Giang (tỉnh Quảng Đông, Trung Quốc). Nhân danh Triều đình Huế, Pháp cũng chính thức kiểm soát quần đảo Trường Sa và quần đảo Hoàng Sa vào năm 1920 và tuyên bố chủ quyền thống trị vào năm 1921'}
  ]
  return(
    <>
    {data.map((item) => {
      return (
        <div key={item.id}>
          <h1>{item.title}</h1>
          {item.content && (
            <h2><ReactReadMoreReadLess
            charLimit={100}
            readMoreText={"Đọc Thêm ▼"}
            readLessText={"Thu Lại ▲"}
          >
            {item.content}
          </ReactReadMoreReadLess></h2>
          )}
        </div>
      );
    })}
  </>
    )
}
export default PostCard;