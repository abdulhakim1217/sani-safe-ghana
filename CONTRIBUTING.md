# Contributing to Sani Alert Ghana

Thank you for your interest in contributing to Sani Alert Ghana! This document provides guidelines and information for contributors.

## 🌟 Ways to Contribute

- **Bug Reports**: Help us identify and fix issues
- **Feature Requests**: Suggest new functionality
- **Code Contributions**: Submit bug fixes and new features
- **Documentation**: Improve README, comments, and guides
- **Design**: Enhance UI/UX and accessibility
- **Testing**: Add tests and improve coverage

## 🚀 Getting Started

### 1. Fork and Clone

```bash
# Fork the repository on GitHub
# Then clone your fork
git clone https://github.com/YOUR_USERNAME/sani-safe-ghana.git
cd sani-safe-ghana
```

### 2. Set Up Development Environment

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### 3. Create a Branch

```bash
# Create a new branch for your feature/fix
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-description
```

## 📝 Development Guidelines

### Code Style

- **TypeScript**: Use TypeScript for all new code
- **ESLint**: Follow the existing ESLint configuration
- **Prettier**: Format code using Prettier
- **Naming**: Use descriptive, camelCase variable names
- **Components**: Use PascalCase for React components

### Component Guidelines

```tsx
// ✅ Good: Descriptive component with proper typing
interface AlertButtonProps {
  message: string;
  variant: 'success' | 'warning' | 'error';
  onAlert: () => void;
}

export function AlertButton({ message, variant, onAlert }: AlertButtonProps) {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onAlert}
    >
      {message}
    </button>
  );
}

// ❌ Avoid: Unclear naming and missing types
function Btn(props: any) {
  return <button onClick={props.click}>{props.txt}</button>;
}
```

### Styling Guidelines

- **Tailwind CSS**: Use Tailwind utility classes
- **Custom CSS**: Minimize custom CSS, prefer Tailwind
- **Responsive**: Mobile-first responsive design
- **Accessibility**: Ensure proper contrast and keyboard navigation

```tsx
// ✅ Good: Semantic HTML with Tailwind classes
<button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors">
  Submit Alert
</button>

// ❌ Avoid: Inline styles and non-semantic elements
<div style={{backgroundColor: 'blue', color: 'white'}} onClick={handleClick}>
  Submit Alert
</div>
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Tests

- Write tests for new features and bug fixes
- Use descriptive test names
- Test both happy path and error cases
- Mock external dependencies

```tsx
// Example test structure
describe('AlertButton', () => {
  it('should call onAlert when clicked', () => {
    const mockAlert = jest.fn();
    render(<AlertButton message="Test" variant="success" onAlert={mockAlert} />);
    
    fireEvent.click(screen.getByRole('button'));
    
    expect(mockAlert).toHaveBeenCalledTimes(1);
  });
});
```

## 📋 Pull Request Process

### 1. Before Submitting

- [ ] Code follows style guidelines
- [ ] Tests pass locally
- [ ] New features have tests
- [ ] Documentation is updated
- [ ] No console errors or warnings

### 2. Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement

## Testing
- [ ] Tests pass
- [ ] Manual testing completed

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
```

### 3. Review Process

1. **Automated Checks**: CI/CD pipeline runs tests and linting
2. **Code Review**: Maintainers review code quality and design
3. **Testing**: Manual testing of new features
4. **Approval**: At least one maintainer approval required
5. **Merge**: Squash and merge to main branch

## 🐛 Bug Reports

### Before Reporting

1. Check existing issues
2. Try the latest version
3. Reproduce the bug consistently

### Bug Report Template

```markdown
**Bug Description**
Clear description of the bug

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What should happen

**Actual Behavior**
What actually happens

**Environment**
- OS: [e.g., Windows 10]
- Browser: [e.g., Chrome 91]
- Version: [e.g., 1.0.0]

**Screenshots**
Add screenshots if applicable
```

## 💡 Feature Requests

### Feature Request Template

```markdown
**Feature Description**
Clear description of the proposed feature

**Problem Statement**
What problem does this solve?

**Proposed Solution**
How should this feature work?

**Alternatives Considered**
Other solutions you've considered

**Additional Context**
Any other context or screenshots
```

## 🎨 Design Contributions

### Design Guidelines

- **Accessibility**: WCAG 2.1 AA compliance
- **Mobile-First**: Design for mobile, enhance for desktop
- **Consistency**: Follow existing design patterns
- **Performance**: Optimize images and assets

### Design Assets

- Use Figma for design mockups
- Export assets in appropriate formats (SVG preferred)
- Provide multiple resolutions for raster images
- Include dark mode variants

## 📚 Documentation

### Documentation Standards

- **Clear Language**: Write for diverse audiences
- **Examples**: Include code examples and screenshots
- **Structure**: Use consistent heading hierarchy
- **Links**: Keep internal links up to date

### Types of Documentation

- **README**: Project overview and quick start
- **API Docs**: Function and component documentation
- **Guides**: Step-by-step tutorials
- **Comments**: Inline code documentation

## 🏷️ Issue Labels

- `bug`: Something isn't working
- `enhancement`: New feature or request
- `documentation`: Improvements to documentation
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention needed
- `priority-high`: High priority issue
- `priority-low`: Low priority issue

## 🤝 Community Guidelines

### Code of Conduct

- **Be Respectful**: Treat everyone with respect
- **Be Inclusive**: Welcome diverse perspectives
- **Be Constructive**: Provide helpful feedback
- **Be Patient**: Help newcomers learn

### Communication

- **GitHub Issues**: For bug reports and feature requests
- **Pull Requests**: For code contributions
- **Discussions**: For questions and general discussion

## 🎯 Development Roadmap

### Current Priorities

1. **Performance Optimization**: Improve loading times
2. **Accessibility**: WCAG 2.1 AA compliance
3. **Mobile Experience**: Enhanced mobile interface
4. **Testing Coverage**: Increase test coverage to 90%

### Future Goals

- **Offline Support**: PWA capabilities
- **Real-time Updates**: WebSocket integration
- **Multi-language**: Internationalization support
- **Advanced Analytics**: Enhanced data visualization

## 📞 Getting Help

- **GitHub Issues**: For project-related questions
- **Documentation**: Check existing documentation first
- **Community**: Engage with other contributors

Thank you for contributing to Sani Alert Ghana! Together, we're building a more sustainable future for Ghana's communities. 🇬🇭