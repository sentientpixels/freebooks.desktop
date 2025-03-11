import { Modal, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

interface AddAccountModalProps {
    opened: boolean,
    onClose: () => void
}

function AddAccountModal({ opened, onClose }: AddAccountModalProps) {
    return (
        <Modal opened={opened} onClose={onClose}>
            <h1>Add Account</h1>
        </Modal>
    )
}

export default AddAccountModal