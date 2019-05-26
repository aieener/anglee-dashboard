import React from "react";
import { Card, Form, DatePicker, Icon, Input, Button } from "antd";
import { Redirect } from "react-router-dom";

const { TextArea } = Input;
class MovieForm extends React.Component {
  state = {
    sumbitted: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }

      const data = {
        ...fieldsValue,
        releaseDate: fieldsValue["date-picker"]
      };
      console.log("Received values of form: ", data);
      this.props.addMovie(data).then(() => {
        this.setState({ sumbitted: true });
      });
    });
  };

  getFormFields() {
    return [
      {
        fieldName: "title",
        labelName: "Movie Name",
        iconName: "play-circle"
      },
      {
        fieldName: "imageUrl",
        labelName: "Movie Poster Url",
        iconName: "link"
      },
      {
        fieldName: "iMDbId",
        labelName: "IMDb review id",
        iconName: "barcode"
      }
    ];
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const dateConfig = {
      rules: [
        { type: "object", required: true, message: "Please select time!" }
      ]
    };
    const nameConfig = labelName => {
      return {
        rules: [
          { required: true, message: `Please enter ${labelName.toLowerCase()}` }
        ]
      };
    };

    const StringInput = field => {
      return (
        <Form.Item label={field.labelName} key={field.labelName}>
          {getFieldDecorator(field.fieldName, nameConfig(field.labelName))(
            <Input
              prefix={
                <Icon
                  type={field.iconName}
                  style={{ color: "rgba(0,0,0,.25)" }}
                />
              }
              placeholder={field.labelName}
              style={{ width: 270 }}
            />
          )}
        </Form.Item>
      );
    };

    const StringInputs = this.getFormFields().map(field => {
      return StringInput(field);
    });

    const DescriptionInput = (
      <Form.Item label="description">
        {getFieldDecorator("description", nameConfig("description"))(
          <TextArea placeholder={"description"} style={{ width: 270 }} />
        )}
      </Form.Item>
    );

    let redirect = null;
    if (this.state.sumbitted) {
      redirect = <Redirect to="/anglee-dashboard/admin/" />;
    }

    return (
      <div style={{display : 'flex', justifyContent: 'center'}}>
        {redirect}
        <Card title="Add Movie" style={{ width: 650 }}>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            {StringInputs}
            <Form.Item label="Release Date">
              {getFieldDecorator("date-picker", dateConfig)(<DatePicker />)}
            </Form.Item>
            {DescriptionInput}

            <Form.Item
              wrapperCol={{
                xs: { span: 24, offset: 0 },
                sm: { span: 16, offset: 8 }
              }}
            >
              <Button type="primary" htmlType="submit">
                Add
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

const WrappedForm = Form.create({ name: "movie_form" })(MovieForm);

export default WrappedForm;
