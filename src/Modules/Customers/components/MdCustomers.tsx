import React, {
    ChangeEvent,
    forwardRef,
    ForwardRefRenderFunction,
    RefObject,
    useCallback,
    useImperativeHandle,
    useRef,
    useState,
} from 'react'

import {Col, Divider, Form, Input, Modal, Row} from 'antd'

import MaskedInput from 'antd-mask-input'
import {Customer} from 'Types'
import api from 'Utils/api'

export type ModalHandles = {
    openModal: (customer?: Customer) => void
}
type Props = {
    updateData: () => void
}

const MdCustomers: ForwardRefRenderFunction<ModalHandles, Props> = (
    {updateData},
    ref,
) => {
    const [form] = Form.useForm()
    const [modalStatus, setStatusModal] = useState(false)
    const [disable, setDisable] = useState(true)
    const [loading, setLoadingStatus] = useState(false)

    const cidade = useRef() as RefObject<Input>
    const numero = useRef() as RefObject<Input>

    const openModal = useCallback(
        (customer?: Customer) => {
            form.resetFields()
            if (customer) form.setFieldsValue(customer)
            setStatusModal(true)
        },
        [form],
    )
    const closeModal = useCallback(() => {
        setStatusModal(false)
    }, [])

    const modalClienOkButton = useCallback(() => {
        form.submit()
    }, [form])

    const savaData = useCallback(
        async (customer: Partial<Customer>) => {
            if (!loading) {
                setLoadingStatus(true)
                const {status} = await api.post<boolean>('/customers', customer)
                if (status === 201) {
                    updateData()
                    setLoadingStatus(false)
                    form.resetFields()
                    closeModal()
                }
            }
        },
        [closeModal, form, loading, updateData],
    )

    const typingCep = async (ev: ChangeEvent<HTMLInputElement>) => {
        const {value} = ev.target
        const transformedValue = value.replace(/-|_/gi, '')

        if (transformedValue.length < 8) return false

        try {
            // form.setFieldsValue(resetAddress)
            setDisable(true)
            const req = await fetch(
                `https://viacep.com.br/ws/${transformedValue}/json/`,
            )
            const data = await req.json()
            if (data.erro) throw new Error()
            form.setFieldsValue(data)
            numero.current?.focus()
        } catch (error) {
            console.log(error)
            setDisable(false)
            cidade.current?.focus()
        }
    }

    useImperativeHandle(ref, () => ({openModal}))

    return (
        <Modal
            title="Gerenciar Cliente"
            visible={modalStatus}
            okText="Salvar"
            onOk={modalClienOkButton}
            confirmLoading={loading}
            cancelText="Cancelar"
            onCancel={closeModal}
            width="800px"
            maskClosable={false}>
            <Form
                form={form}
                layout="vertical"
                onFinish={savaData}
                // initialValues={defaulCustomer}
            >
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item name="nome" label="Nome completo">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="CPF" name="cpf">
                            <MaskedInput mask="111.111.111-11" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Telefone" name="telefone">
                            <MaskedInput mask="(11) 1111-1111" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Celular" name="celular">
                            <MaskedInput mask="(11) 11111-1111" />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item label="Email" name="email">
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>

                <Divider orientation="left"></Divider>

                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item label="CEP" name="cep">
                            <MaskedInput
                                mask="11111-111"
                                onChange={typingCep}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={18}>
                        <Form.Item label="Cidade" name="localidade">
                            <Input ref={cidade} disabled={disable} />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="Estado" name="uf">
                            <Input disabled={disable} />
                        </Form.Item>
                    </Col>

                    <Col span={10}>
                        <Form.Item label="Rua" name="logradouro">
                            <Input disabled={disable} />
                        </Form.Item>
                    </Col>
                    <Col span={10}>
                        <Form.Item label="Bairro" name="bairro">
                            <Input disabled={disable} />
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <Form.Item label="Número" name="numero">
                            <Input ref={numero} />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item label="Complemento" name="complemento">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Referencia" name="referencia">
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    )
}

export default forwardRef(MdCustomers)
