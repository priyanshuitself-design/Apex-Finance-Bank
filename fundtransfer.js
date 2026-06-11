// Live date-time
        function updateTime() {
            const now = new Date();
            document.getElementById('datetime').textContent =
                now.toLocaleDateString('en-IN', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' }) +
                '  ' +
                now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
        }
        updateTime();
        setInterval(updateTime, 60000);

        // Tab switching
        function switchTab(tab, btn) {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.querySelectorAll('.transfer-card').forEach(c => c.classList.remove('visible'));
            document.getElementById('form-' + tab).classList.add('visible');
        }

        // Quick amount chips
        function setAmount(id, val) {
            document.getElementById(id).value = val;
        }

        // Clear form
        function resetForm(prefix) {
            ['accno', 'name', 'amount', 'remarks'].forEach(f => {
                const el = document.getElementById(prefix + '-' + f);
                if (el) el.value = '';
            });
            if (prefix === 'other') {
                document.getElementById('other-ifsc').value = '';
                document.getElementById('other-bank').value = '';
            }
        }

        // Submit transfer
        function submitTransfer(prefix) {
            const accno = document.getElementById(prefix + '-accno').value.trim();
            const name  = document.getElementById(prefix + '-name').value.trim();
            const amount = document.getElementById(prefix + '-amount').value;

            if (!accno || !name || !amount || Number(amount) <= 0) {
                alert('Please fill in all required fields with valid values.');
                return;
            }

            const formatted = Number(amount).toLocaleString('en-IN');
            document.getElementById('modal-msg').textContent =
                `₹${formatted} transferred to ${name} successfully.`;

            document.getElementById('modal').classList.add('show');
            resetForm(prefix);
        }

        function closeModal() {
            document.getElementById('modal').classList.remove('show');
        }

        // IFSC auto-uppercase
        const ifscInput = document.getElementById('other-ifsc');
        if (ifscInput) {
            ifscInput.addEventListener('input', () => {
                ifscInput.value = ifscInput.value.toUpperCase();
            });
        }