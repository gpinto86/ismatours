const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#trucazo')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href',`mailto:info@ismatours.com?subjet=${form.get('name')}${form.get('email')}&body=${form.get('massage')}` )
    $buttonMailto.click()
}
