import { useState, useLayoutEffect } from "react";
// Usage
export default function App() {
  // State for our modal
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Show Modal</button>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad possimus vel ipsa quasi in voluptatem magni, accusamus doloremque blanditiis neque expedita officiis, fugit at fuga quae eligendi eaque tempora sed quo amet alias reprehenderit impedit. Rerum reprehenderit quidem doloribus vitae pariatur odit, dolor perspiciatis maxime soluta debitis. Et explicabo, voluptas consequuntur corrupti nesciunt dignissimos similique tempore quas libero. Et voluptatem sed perspiciatis eveniet corporis nisi, vel in voluptatum odit repudiandae doloribus temporibus iusto molestiae nihil voluptates debitis maxime soluta culpa magnam accusamus. Laudantium optio quas doloribus pariatur itaque! Autem aliquid unde facilis, eius voluptatem doloribus voluptate explicabo ipsam libero placeat distinctio sed accusantium voluptates qui eaque ipsa minima animi at blanditiis, sint atque cupiditate maiores eum? Maxime eaque qui nihil reprehenderit, id et debitis amet accusantium, unde dicta sint labore. Voluptas architecto at, dignissimos, vel facere soluta dolore excepturi maiores voluptatum eveniet veniam iste quisquam suscipit illo consequuntur. Harum officia quod quas necessitatibus eligendi id blanditiis quam illo asperiores itaque delectus earum dolore, hic beatae maxime est et, suscipit omnis error iste rerum. Dignissimos in sapiente consequuntur nihil quasi quae odit non ipsa enim temporibus sunt ea tenetur cupiditate ratione nisi reprehenderit veritatis culpa quo, pariatur ipsum voluptates labore quis. Explicabo exercitationem rem sunt consectetur facere, consequuntur, blanditiis voluptate dignissimos neque cum placeat quasi qui quia at recusandae delectus. Officia alias soluta rerum tenetur distinctio eveniet provident magnam ducimus possimus quibusdam eum itaque porro sint totam laudantium quod natus quasi, nemo non adipisci minus at, repellendus ipsam nulla. Eligendi, exercitationem amet commodi ratione illum modi doloremque atque ea sapiente tempore recusandae ducimus tenetur, alias at et iste velit. Vitae ipsum beatae quod consequatur dolorum! Corrupti quibusdam officiis nobis tempora ad dolorum exercitationem, dicta doloremque nesciunt ab sint explicabo eum fuga, blanditiis, delectus rem recusandae nam saepe repellat praesentium ipsa possimus expedita mollitia! Laborum nisi praesentium eos amet, facilis distinctio officiis natus totam et quidem illum doloremque assumenda inventore dignissimos architecto quas possimus aliquid sit ipsa doloribus perferendis? Accusamus quas consequuntur, qui quae vero eius quod architecto amet! Illo cupiditate vel magnam aperiam culpa enim eius nihil, nemo nostrum nobis? Necessitatibus sunt nulla, dolor nostrum unde nam. Nihil quibusdam laudantium nobis animi quod, ducimus, suscipit ab velit incidunt odit inventore. Accusantium, excepturi sint. Eveniet earum asperiores perspiciatis tempore. Nisi, quam? Nihil natus sequi esse pariatur ex iste cum voluptatum nemo at blanditiis dolorum qui aliquid sunt reprehenderit, commodi excepturi fugiat modi perferendis vitae voluptas aliquam fugit praesentium voluptates. Dolorem consequatur accusamus commodi recusandae adipisci nisi impedit et, saepe voluptatem quaerat velit veritatis cumque dolores ipsum modi porro, maiores asperiores fugit ipsa doloribus quis quisquam quae. Laborum cupiditate obcaecati autem laboriosam officiis unde aspernatur deleniti ad in asperiores nulla alias similique, vitae nihil sit eligendi officia doloremque ipsum rem, optio numquam veritatis natus nobis. Autem sapiente modi assumenda praesentium aut minima vitae maiores eius eaque nam amet voluptate tempora libero itaque, soluta placeat cum deleniti? Unde qui saepe incidunt totam quis excepturi. Corrupti, sunt quasi! Natus, optio nam. Magnam sequi suscipit aliquid. Dicta iure aut sunt rem eum minus labore perferendis sequi? Impedit voluptatibus nesciunt mollitia aliquid in necessitatibus nihil inventore dolorem ab odit, perspiciatis fugiat porro et rem laudantium. Ipsam pariatur quo nostrum saepe voluptatem esse ab veritatis quam dolore voluptates? Est aut eum doloremque corporis fugiat odit! Culpa eos natus molestias quasi ab, fugiat a officiis nulla odio, perspiciatis fugit! A facere neque quia at numquam? Repudiandae, distinctio? Perferendis cumque dolor nemo officiis, quidem libero rerum animi fugiat expedita explicabo iste non. Perspiciatis iste aut praesentium ab velit error, provident ea veniam laborum nemo labore amet debitis fugiat fuga quasi officia quibusdam voluptatibus repudiandae? Vero, optio inventore velit voluptatum nobis illo laboriosam, nemo ipsum quod facere iste deserunt dolores iure, libero maxime. Accusamus ratione omnis suscipit! Repellendus blanditiis praesentium tempora! Architecto consequatur asperiores sint optio debitis, culpa dolorum, dolore dolorem atque soluta eveniet, ea veniam sit magnam officia ad cumque amet. Architecto iure excepturi corporis est porro eum sequi accusamus, libero aperiam, animi a autem quam eius reprehenderit praesentium expedita qui dolorem molestias deserunt veritatis in mollitia? Aperiam error quo quis facere asperiores dolorem similique nihil hic ipsum quisquam iure delectus, nulla totam, aliquid autem ratione commodi quam impedit nemo praesentium. Quia eligendi necessitatibus soluta deserunt ullam quisquam expedita ad non et. Ut ea id laborum voluptates nulla quos iusto. Assumenda quaerat eveniet facere rem magni unde eum non! Vel possimus blanditiis enim reprehenderit necessitatibus, qui autem praesentium aliquid culpa, tempore fuga facilis porro suscipit cum quod iusto doloremque quibusdam! Sequi non, aspernatur tempore eveniet excepturi et saepe aperiam inventore, ipsam voluptatibus molestias animi iure, quisquam ratione quae accusantium praesentium! Cum repudiandae doloremque fugiat corporis dicta vel ratione inventore saepe reprehenderit debitis laudantium minima reiciendis hic rerum sed vitae, facilis dolore mollitia. Ipsa ab numquam quidem minus animi soluta ut enim eligendi et? Obcaecati incidunt quaerat excepturi quidem quasi consectetur, rem, porro blanditiis iure mollitia dolores voluptates perferendis doloribus asperiores exercitationem suscipit tempore, laudantium natus maxime deleniti! Aliquid, aliquam repellat. Ipsum earum vero consequatur exercitationem minima itaque recusandae, quasi ea distinctio deleniti inventore tempora eaque officia odit maiores! Qui, officiis natus ipsam expedita nulla dolorum corrupti temporibus eaque soluta. Incidunt hic quae ipsa minima amet quisquam maiores ullam tempora esse alias sunt magnam tempore error quis aut eum, provident harum, autem pariatur suscipit aperiam repellendus molestias dolor officia. Ab libero harum assumenda numquam beatae, nemo fugiat magni, dolorum incidunt itaque impedit quos qui modi quia voluptatum ipsum minus in mollitia pariatur? Aspernatur, a. Praesentium, aspernatur architecto. At facilis dolore quas illo ipsum in officiis cumque debitis culpa? Praesentium vitae impedit, non harum accusamus laudantium aliquid iste, esse officiis similique expedita suscipit sunt fugiat! Id perspiciatis totam impedit harum culpa praesentium a itaque placeat aliquid molestias ut, tempore consequatur inventore ducimus? Libero, qui fugiat. Rerum, minima iusto, consectetur nulla nesciunt neque ipsam perspiciatis fugit inventore quibusdam laborum eum temporibus. Incidunt, saepe tenetur laboriosam ipsa nulla, facere nam provident vitae, libero odio enim porro nostrum rerum optio nemo pariatur modi repudiandae eius?</div>
      {modalOpen && (
        <Modal
          title="Try scrolling"
          content="I bet you you can't! Muahahaha 😈"
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}
function Modal({ title, content, onClose }) {
  // Call hook to lock body scroll
  useLockBodyScroll();
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}
// Hook
function useLockBodyScroll() {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = "hidden";
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle);
  }, []); // Empty array ensures effect is only run on mount and unmount
}