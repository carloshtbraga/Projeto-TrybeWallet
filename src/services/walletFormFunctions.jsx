export const handleValue = ({ target: { value } }) => {
  const { expenses } = this.state;
  this.setState({
    expenses: { ...expenses, value },
  });
};

export const handleDescription = ({ target: { value } }) => {
  const { expenses } = this.state;
  this.setState({
    expenses: { ...expenses, description: value },
  });
};

export const handleCurrency = ({ target: { value } }) => {
  const { expenses } = this.state;
  this.setState({
    expenses: { ...expenses, currency: value },
  });
};

export const handleMethod = ({ target: { value } }) => {
  const { expenses } = this.state;
  this.setState({
    expenses: { ...expenses, method: value },
  });
};

export const handleTag = ({ target: { value } }) => {
  const { expenses } = this.state;
  this.setState({
    expenses: { ...expenses, tag: value },
  });
};
