import Footer from '../../../components/Footer'
import Input from '../../../components/Input'
import { Label } from '../../../components/Input/style'
import Nav from '../../../components/Nav'
import Steps from '../../../components/Steps/Steps'
import * as C from './style'

const FirstStep = () => {
    return (
        <>
            <Nav />
            <C.Section>
                <C.FormContainer>
                </C.FormContainer>
                <C.ContainerInputsForm>
                    <C.ContainerFormTitle>
                        <Steps currentStep={1} />
                    </C.ContainerFormTitle>
                    <C.AllContainerForm>
                        <C.ContainerFormLeft>
                            <C.ContainerFields>
                                <Label fontSize="15px">Nome da agremiação</Label>
                                <Input value={null}
                                    onChange={undefined}
                                    type={'text'}
                                    width={'95%'}
                                    placeholder="Bloco do Bacalhau do Batata"></Input>

                                <Label fontSize="15px">Data de fundação</Label>
                                <Input value={null}
                                    onChange={undefined}
                                    type={'text'}
                                    width={'95%'}
                                    placeholder="Bloco do Bacalhau do Batata"></Input>

                                <Label fontSize="15px">Cores</Label>
                                <Input value={null}
                                    onChange={undefined}
                                    type={'text'}
                                    width={'95%'}
                                    placeholder="Bloco do Bacalhau do Batata"></Input>

                                <Label fontSize="15px">Tipo de Associação</Label>
                                <Input value={null}
                                    onChange={undefined}
                                    type={'text'}
                                    width={'95%'}
                                    placeholder="Bloco do Bacalhau do Batata"></Input>


                                <Label fontSize="15px">Membros Ativos</Label>
                                <Input value={null}
                                    onChange={undefined}
                                    type={'text'}
                                    width={'95%'}
                                    placeholder="Bloco do Bacalhau do Batata"></Input>
                            </C.ContainerFields>
                        </C.ContainerFormLeft>
                        <C.ContainerFormRight>
                            <C.ContainerFields>
                                <Label fontSize="15px">Endereço</Label>
                                <Input value={null}
                                    onChange={undefined}
                                    type={'text'}
                                    width={'95%'}
                                    placeholder="Bloco do Bacalhau do Batata"></Input>

                                <Label fontSize="15px">Número</Label>
                                <Input value={null}
                                    onChange={undefined}
                                    type={'text'}
                                    width={'95%'}
                                    placeholder="Bloco do Bacalhau do Batata"></Input>

                                <Label fontSize="15px">Complemento</Label>
                                <Input value={null}
                                    onChange={undefined}
                                    type={'text'}
                                    width={'95%'}
                                    placeholder="Bloco do Bacalhau do Batata"></Input>

                                <Label fontSize="15px">Bairro</Label>
                                <Input value={null}
                                    onChange={undefined}
                                    type={'text'}
                                    width={'95%'}
                                    placeholder="Bloco do Bacalhau do Batata"></Input>

                                <Label fontSize="15px">Cidade</Label>
                                <Input value={null}
                                    onChange={undefined}
                                    type={'text'}
                                    width={'95%'}
                                    placeholder="Bloco do Bacalhau do Batata"></Input>
                            </C.ContainerFields>
                        </C.ContainerFormRight>
                    </C.AllContainerForm>
                    <C.ContainerFormButtons>
                        <C.ButtonForHome>Conferir Listagem</C.ButtonForHome>
                        <C.ButtonForList>Próxima Etapa</C.ButtonForList>
                    </C.ContainerFormButtons>
                </C.ContainerInputsForm>
            </C.Section>
            <Footer />
        </>
    )
}

export default FirstStep