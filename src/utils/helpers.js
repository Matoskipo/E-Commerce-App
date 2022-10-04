export const formatPrice = (money) => {
  return new Intl.NumberFormat('en-NG',{
    style:'currency',
    currency:'NGN',
  }).format(money)

}

export const getUniqueValues = () => {}
