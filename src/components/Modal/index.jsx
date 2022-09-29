import { Formik } from "formik";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import * as Yup from 'yup'
import { createProducts } from "../../redux/slices/productsSlice";
const Modal = styled.div`
  max-width: 800px;
  width: 100%;
  background-color: white;
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  max-height: calc(100% - 200px);
  display: flex;
  flex-direction: column;
`;
const ModalContent = styled.div`
display: flex;
flex-direction: column;
  overflow: auto;
  min-height: 200px;
  padding: 0px 40px 5px;
`;
const ModalFooter = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
`;
const ConfirmButton = styled.button`
  margin: 10px;
  color: white;
  height: 40px;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: blue;
  &:hover{
    background: palevioletred;
  }
`;
const ModalShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;
const ModalBanner = styled.div`
text-align: center;
  margin-bottom: 20px;
  background-color: blue;
  color: white;
  padding: 10px;
`;
export const MainButton = styled.button`
`;
const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;
const TextArea = styled.textarea`
display: block;
  font-size: 14px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  resize: none;
  border-radius: 3px;
  ::placeholder {
    font-size: 18px;
    color: palevioletred;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const InpitWarapper = styled.div`
  display: flex;
  align-items: center;
`;
const validationSchema = Yup.object().shape({
  title: Yup.string().trim('Required').max(10, 'The maximum number of character exceeded').required(),
  description: Yup.string().max(1000, 'The maximum number of character exceeded').required(),
  price: Yup.number('Only number').positive().integer().required(),
  stock: Yup.number('Only number').positive().integer().required(),
  category: Yup.string().max(10, 'The maximum number of character exceeded').required(),
})
const initialValues = { title: '', description: '', category: '', price: '', stock: '', }

function ModalContainer({ setOpen }) {
  const dispatch = useDispatch()
  const close = () => {
    setOpen(false);
  }

  return ReactDOM.createPortal(
    <>
      <ModalShadow onClick={close} />
      <Modal>
        <ModalBanner>add new product</ModalBanner>
        <ModalContent>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              dispatch(createProducts({ ...values }))
              setSubmitting(false);
              close()
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form onSubmit={handleSubmit}>
                <InpitWarapper>
                  <Input
                    type="text"
                    name="title"
                    placeholder='Title'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                  />
                  {errors.title && touched.title && errors.title}
                </InpitWarapper>
                <InpitWarapper>
                  <Input
                    type="text"
                    name="category"
                    placeholder='Category'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.category}
                  />
                  {errors.category && touched.category && errors.category}
                </InpitWarapper>
                <InpitWarapper>
                  <Input
                    type="textarea"
                    name="description"
                    placeholder='Description'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                  />
                  {errors.description && touched.description && errors.description}
                </InpitWarapper>
                <InpitWarapper>
                  <Input
                    type="text"
                    name="price"
                    placeholder='Price'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.price}
                  />
                  {errors.price && touched.price && errors.price}
                </InpitWarapper>
                <InpitWarapper>
                  <Input
                    type="text"
                    name="stock"
                    placeholder='Stock'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.stock}
                  />
                  {errors.stock && touched.stock && errors.stock}
                </InpitWarapper>
                <ModalFooter>
                  <ConfirmButton type="submit" disabled={isSubmitting}>
                    Submit
                  </ConfirmButton>
                  <ConfirmButton type="button" onClick={close}>
                    Cancel
                  </ConfirmButton>
                </ModalFooter>
              </Form>
            )}
          </Formik>
        </ModalContent>
      </Modal>
    </>,
    document.getElementById('app-modal'),
  );
}
export default ModalContainer