import { Formik, Form } from 'formik';

import { Button, FormikInput, FormikSelect } from '@components/baseComponents';
import { BUTTON } from '@common/constant';

/**
 * Renders a search bar component.
 *
 * @return {JSX.Element} The rendered search bar.
 */
export const SearchBar = (): JSX.Element => {
  // TODO: add validation, manage with context or redux
  return (
    <div className="search-wrapper ">
      <Formik
        initialValues={{ property: '', want: '', where: '' }}
        onSubmit={(values) => console.log(values)}
      >
        <Form className="form-search">
          <FormikSelect label="I'm looking for" id="property" name="property">
            <option value="" className="text-gray">
              --- Select ---
            </option>
            <option value="apartment">An apartment</option>
            <option value="house">A house</option>
          </FormikSelect>
          <FormikSelect label="I want to" id="want" name="want">
            <option value="">--- Select ---</option>
            <option value="rent">Rent</option>
            <option value="buy">Buy</option>
          </FormikSelect>

          <FormikInput label="where" id="where" name="where" />

          <div className="form-search__input">
            <span className="w-full h-2"></span>
            <Button
              type="submit"
              typeBtn={BUTTON.TYPE.PRIMARY}
              size={BUTTON.SIZE.MEDIUM}
            >
              Search
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
