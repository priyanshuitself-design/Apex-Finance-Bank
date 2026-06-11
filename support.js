function toggleFaq(button) {
    const faqItem = button.parentElement;
    const content = faqItem.querySelector('.faq-content');
    const isActive = faqItem.classList.contains('active');

    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.faq-content').style.maxHeight = null;
    });

    if (!isActive) {
        faqItem.classList.add('active');
        content.style.maxHeight = content.scrollHeight + "px";
    }
}