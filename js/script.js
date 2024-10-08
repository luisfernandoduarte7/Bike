function ModalComprar() {
  Swal.fire({
    title: "Item adicionado ao carrinho!",
    text: "Item no carrinho!",
    icon: "success"
  });
}

function ModalConfirmar() {
  Swal.fire({
    title: "Deseja finalizar a compra?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sim"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Compra Finalizada!",
        icon: "success"
      });
    }
  });
}